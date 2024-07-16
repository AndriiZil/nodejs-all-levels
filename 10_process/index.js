const { version } = require('process');

console.log('start');

console.log(`Version: ${version}`); // Version: v16.14.0

console.log(process.versions);
/*
{
    node: '14.15.0',
    v8: '8.4.371.19-node.17',
    uv: '1.40.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.16.1',
    modules: '83',
    nghttp2: '1.41.0',
    napi: '7',
    llhttp: '2.1.3',
    openssl: '1.1.1g',
    cldr: '37.0',
    icu: '67.1',
    tz: '2020a',
    unicode: '13.0'
}
* */

console.log(process.arch); // x64

console.log(process.argv); /*
[
    '/usr/bin/node',
    '/home/andrii/Documents/github/nodejs-all-levels/10_process/files.js'
]
*/

console.log(process.config);
/*
{
  target_defaults: {
    cflags: [],
    default_configuration: 'Release',
    defines: [],
    include_dirs: [],
    libraries: []
  },
  variables: {
    asan: 0,
    build_v8_with_gn: false,
    coverage: false,
    dcheck_always_on: 0,
    debug_nghttp2: false,
    debug_node: false,
    enable_lto: false,
    enable_pgo_generate: false,
    enable_pgo_use: false,
    error_on_warn: false,
    force_dynamic_crt: 0,
    gas_version: '2.30',
    host_arch: 'x64',
    icu_data_in: '../../deps/icu-tmp/icudt67l.dat',
    icu_endianness: 'l',
    icu_gyp_path: 'tools/icu/icu-generic.gyp',
    icu_path: 'deps/icu-small',
    icu_small: false,
    icu_ver_major: '67',
    is_debug: 0,
    llvm_version: '0.0',
    napi_build_version: '7',
    node_byteorder: 'little',
    node_debug_lib: false,
    node_enable_d8: false,
    node_install_npm: true,
    node_module_version: 83,
    node_no_browser_globals: false,
    node_prefix: '/',
    node_release_urlbase: 'https://nodejs.org/download/release/',
    node_section_ordering_info: '',
    node_shared: false,
    node_shared_brotli: false,
    node_shared_cares: false,
    node_shared_http_parser: false,
    node_shared_libuv: false,
    node_shared_nghttp2: false,
    node_shared_openssl: false,
    node_shared_zlib: false,
    node_tag: '',
    node_target_type: 'executable',
    node_use_bundled_v8: true,
    node_use_dtrace: false,
    node_use_etw: false,
    node_use_node_code_cache: true,
    node_use_node_snapshot: true,
    node_use_openssl: true,
    node_use_v8_platform: true,
    node_with_ltcg: false,
    node_without_node_options: false,
    openssl_fips: '',
    openssl_is_fips: false,
    ossfuzz: false,
    shlib_suffix: 'so.83',
    target_arch: 'x64',
    v8_enable_31bit_smis_on_64bit_arch: 0,
    v8_enable_gdbjit: 0,
    v8_enable_i18n_support: 1,
    v8_enable_inspector: 1,
    v8_enable_lite_mode: 0,
    v8_enable_object_print: 1,
    v8_enable_pointer_compression: 0,
    v8_no_strict_aliasing: 1,
    v8_optimized_debug: 1,
    v8_promise_internal_field_count: 1,
    v8_random_seed: 0,
    v8_trace_maps: 0,
    v8_use_siphash: 1,
    want_separate_host_toolset: 0
  }
}
* */

console.log(process.connected); // undefined

console.log(process.cpuUsage()); // { user: 56364, system: 0 }

console.log(process.cwd()); // /home/andrii/Documents/github/nodejs-all-levels/10_process

process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
});

process.on('warning', (warn) => {
  console.warn(warn);
});

if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`); // Current gid: 1000
}

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`); // Current uid: 1000
}

console.log(process.hrtime()); // [ 23113, 772553753 ]

// process.kill(process.pid);

console.log(process.memoryUsage()); /*
    {
      rss: 32002048,
      heapTotal: 4730880,
      heapUsed: 2993672,
      external: 959260,
      arrayBuffers: 9414
    }
*/

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log(process.platform); // linux

console.log(process.release); /*
    {
      name: 'node',
      lts: 'Fermium',
      sourceUrl: 'https://nodejs.org/download/release/v14.15.0/node-v14.15.0.tar.gz',
      headersUrl: 'https://nodejs.org/download/release/v14.15.0/node-v14.15.0-headers.tar.gz'
    }
*/

console.log(process.report);
/*
    {
      writeReport: [Function: writeReport],
      getReport: [Function: getReport],
      directory: [Getter/Setter],
      filename: [Getter/Setter],
      compact: [Getter/Setter],
      signal: [Getter/Setter],
      reportOnFatalError: [Getter/Setter],
      reportOnSignal: [Getter/Setter],
      reportOnUncaughtException: [Getter/Setter]
    }
*/

console.log(process.report.writeReport());
