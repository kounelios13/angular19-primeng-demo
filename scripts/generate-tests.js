import { Project } from 'ts-morph'
import fs from 'fs'
import path from 'path'

// Path to Angular app source
const SOURCE_PATH = './src/app'

const generateTestForFile = (filePath) => {
  const specFilePath = filePath.replace('.ts', '.spec.ts')

  if (fs.existsSync(specFilePath)) {
    console.log(`⚠️ Test file already exists: ${specFilePath}`)
    return
  }

  const fileName = path.basename(filePath, '.ts')
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  // Extract exported members from the file
  const exportMatch = fileContent.match(
    /export (const|class|function|interface|type) (\w+)/,
  )
  const exportName = exportMatch ? exportMatch[2] : fileName

  let testTemplate

  if (fileContent.includes('ApplicationConfig')) {
    // Application Config Test Template
    console.log(`🔑 Generating tests for application config: ${fileName}`)
    testTemplate = `import { ${exportName} } from './${fileName}';

describe('${exportName}', () => {
  it('✅ should be defined', () => {
    expect(${exportName}).toBeDefined();
  });

  it('📦 should have providers', () => {
    expect(${exportName}.providers).toBeTruthy();
  });
});
`
  } else if (
    fileContent.includes('@Component') ||
    fileContent.includes('@Directive') ||
    fileContent.includes('@Pipe')
  ) {
    // Component, Directive, or Pipe Test Template
    console.log(`✨ Generating tests for: ${fileName}`)
    const isStandalone = fileContent.includes('standalone: true')
    const importStatement = isStandalone
      ? `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ${exportName} } from './${fileName}';`
      : `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ${exportName}, ${exportName}Module } from './${fileName}';`

    const testBedConfig = isStandalone
      ? `imports: [${exportName}],`
      : `imports: [${exportName}Module],`

    testTemplate = `${importStatement}

describe('${exportName}', () => {
  let component: ${exportName};
  let fixture: ComponentFixture<${exportName}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ${testBedConfig}
    }).compileComponents();

    fixture = TestBed.createComponent(${exportName});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🚀 should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('🌀 should call ngOnInit if it exists', () => {
    if ('ngOnInit' in component && typeof component.ngOnInit === 'function') {
      const ngOnInitSpy = spyOn(component as any, 'ngOnInit').and.callThrough();
      (component as any).ngOnInit();
      expect(ngOnInitSpy).toHaveBeenCalled();
    } else {
      expect(true).toBeTruthy(); // Component doesn't implement ngOnInit
    }
  });

  it('💥 should call ngOnDestroy if it exists', () => {
    if ('ngOnDestroy' in component && typeof component.ngOnDestroy === 'function') {
      const ngOnDestroySpy = spyOn(component as any, 'ngOnDestroy').and.callThrough();
      (component as any).ngOnDestroy();
      expect(ngOnDestroySpy).toHaveBeenCalled();
    } else {
      expect(true).toBeTruthy(); // Component doesn't implement ngOnDestroy
    }
  });

  it('📃 should render template correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });
});
`
  } else if (fileContent.includes('@Injectable')) {
    // Service Test Template
    console.log(`🛠️ Generating tests for service: ${fileName}`)
    testTemplate = `import { TestBed } from '@angular/core/testing';
import { ${exportName} } from './${fileName}';

describe('${exportName}', () => {
  let service: ${exportName};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${exportName});
  });

  it('🔧 should be created', () => {
    expect(service).toBeTruthy();
  });

  it('🛡️ should have a defined method', () => {
    expect(typeof service.someMethod).toBe('function'); // Replace 'someMethod' with actual method names
  });
});
`
  } else {
    // Generic Test Template
    console.log(`📂 Generating generic test for: ${fileName}`)
    testTemplate = `import { ${exportName} } from './${fileName}';

describe('${exportName}', () => {
  it('✅ should be defined', () => {
    expect(${exportName}).toBeDefined();
  });
});
`
  }

  fs.writeFileSync(specFilePath, testTemplate)
  console.log(`✨ Test file created: ${specFilePath}`)
}

const project = new Project()
project.addSourceFilesAtPaths(`${SOURCE_PATH}/**/*.ts`)

console.log('🌟 Starting test generation...')
project.getSourceFiles().forEach((sourceFile) => {
  const filePath = sourceFile.getFilePath()
  if (!filePath.endsWith('.spec.ts')) {
    generateTestForFile(filePath)
  }
})
console.log('🎉 Test generation completed!')
