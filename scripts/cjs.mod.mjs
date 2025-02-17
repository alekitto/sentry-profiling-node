import fs from 'fs';
let contents = fs.readFileSync('./src/cpu_profiler.ts', 'utf8');

// Convert to CJS
contents = contents.replace(
  /\/\/\s+__START__REPLACE__DIRNAME__((.|\r|\n)*)__END__REPLACE__DIRNAME__/gm,
  '// __START__REPLACE__DIRNAME__\nconst _dirname = __dirname;\n// __END__REPLACE__DIRNAME__'
);

contents = contents.replace(
  /\/\/\s+__START__REPLACE__REQUIRE__((.|\r|\n)*)__END__REPLACE__REQUIRE__/gm,
  `// __START__REPLACE__REQUIRE__\n\n// __END__REPLACE__REQUIRE__`
);

fs.writeFileSync('./src/cpu_profiler.ts', contents, 'utf8');
