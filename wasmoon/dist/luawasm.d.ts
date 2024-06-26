/// <reference types="emscripten" />
import { EnvironmentVariables, LuaReturn, LuaState, LuaType } from './types';
interface LuaEmscriptenModule extends EmscriptenModule {
    ccall: typeof ccall;
    addFunction: typeof addFunction;
    removeFunction: typeof removeFunction;
    setValue: typeof setValue;
    getValue: typeof getValue;
    FS: typeof FS;
    stringToNewUTF8: typeof allocateUTF8;
    lengthBytesUTF8: typeof lengthBytesUTF8;
    stringToUTF8: typeof stringToUTF8;
    ENV: EnvironmentVariables;
    _realloc: (pointer: number, size: number) => number;
}
export default class LuaWasm {
    static initialize(customWasmFileLocation?: string, environmentVariables?: EnvironmentVariables): Promise<LuaWasm>;
    module: LuaEmscriptenModule;
    luaL_checkversion_: (L: LuaState, ver: number, sz: number) => void;
    luaL_getmetafield: (L: LuaState, obj: number, e: string | null) => LuaType;
    luaL_callmeta: (L: LuaState, obj: number, e: string | null) => number;
    luaL_tolstring: (L: LuaState, idx: number, len: number | null) => string;
    luaL_argerror: (L: LuaState, arg: number, extramsg: string | null) => number;
    luaL_typeerror: (L: LuaState, arg: number, tname: string | null) => number;
    luaL_checklstring: (L: LuaState, arg: number, l: number | null) => string;
    luaL_optlstring: (L: LuaState, arg: number, def: string | null, l: number | null) => string;
    luaL_checknumber: (L: LuaState, arg: number) => number;
    luaL_optnumber: (L: LuaState, arg: number, def: number) => number;
    luaL_checkinteger: (L: LuaState, arg: number) => number;
    luaL_optinteger: (L: LuaState, arg: number, def: number) => number;
    luaL_checkstack: (L: LuaState, sz: number, msg: string | null) => void;
    luaL_checktype: (L: LuaState, arg: number, t: number) => void;
    luaL_checkany: (L: LuaState, arg: number) => void;
    luaL_newmetatable: (L: LuaState, tname: string | null) => number;
    luaL_setmetatable: (L: LuaState, tname: string | null) => void;
    luaL_testudata: (L: LuaState, ud: number, tname: string | null) => number;
    luaL_checkudata: (L: LuaState, ud: number, tname: string | null) => number;
    luaL_where: (L: LuaState, lvl: number) => void;
    luaL_fileresult: (L: LuaState, stat: number, fname: string | null) => number;
    luaL_execresult: (L: LuaState, stat: number) => number;
    luaL_ref: (L: LuaState, t: number) => number;
    luaL_unref: (L: LuaState, t: number, ref: number) => void;
    luaL_loadfilex: (L: LuaState, filename: string | null, mode: string | null) => LuaReturn;
    luaL_loadbufferx: (L: LuaState, buff: string | number | null, sz: number, name: string | number | null, mode: string | null) => LuaReturn;
    luaL_loadstring: (L: LuaState, s: string | null) => LuaReturn;
    luaL_newstate: () => LuaState;
    luaL_len: (L: LuaState, idx: number) => number;
    luaL_addgsub: (b: number | null, s: string | null, p: string | null, r: string | null) => void;
    luaL_gsub: (L: LuaState, s: string | null, p: string | null, r: string | null) => string;
    luaL_setfuncs: (L: LuaState, l: number | null, nup: number) => void;
    luaL_getsubtable: (L: LuaState, idx: number, fname: string | null) => number;
    luaL_traceback: (L: LuaState, L1: LuaState, msg: string | null, level: number) => void;
    luaL_requiref: (L: LuaState, modname: string | null, openf: number, glb: number) => void;
    luaL_buffinit: (L: LuaState, B: number | null) => void;
    luaL_prepbuffsize: (B: number | null, sz: number) => string;
    luaL_addlstring: (B: number | null, s: string | null, l: number) => void;
    luaL_addstring: (B: number | null, s: string | null) => void;
    luaL_addvalue: (B: number | null) => void;
    luaL_pushresult: (B: number | null) => void;
    luaL_pushresultsize: (B: number | null, sz: number) => void;
    luaL_buffinitsize: (L: LuaState, B: number | null, sz: number) => string;
    lua_newstate: (f: number | null, ud: number | null) => LuaState;
    lua_close: (L: LuaState) => void;
    lua_newthread: (L: LuaState) => LuaState;
    lua_resetthread: (L: LuaState) => LuaReturn;
    lua_atpanic: (L: LuaState, panicf: number) => number;
    lua_version: (L: LuaState) => number;
    lua_absindex: (L: LuaState, idx: number) => number;
    lua_gettop: (L: LuaState) => number;
    lua_settop: (L: LuaState, idx: number) => void;
    lua_pushvalue: (L: LuaState, idx: number) => void;
    lua_rotate: (L: LuaState, idx: number, n: number) => void;
    lua_copy: (L: LuaState, fromidx: number, toidx: number) => void;
    lua_checkstack: (L: LuaState, n: number) => number;
    lua_xmove: (from: LuaState, to: LuaState, n: number) => void;
    lua_isnumber: (L: LuaState, idx: number) => number;
    lua_isstring: (L: LuaState, idx: number) => number;
    lua_iscfunction: (L: LuaState, idx: number) => number;
    lua_isinteger: (L: LuaState, idx: number) => number;
    lua_isuserdata: (L: LuaState, idx: number) => number;
    lua_type: (L: LuaState, idx: number) => LuaType;
    lua_typename: (L: LuaState, tp: number) => string;
    lua_tonumberx: (L: LuaState, idx: number, isnum: number | null) => number;
    lua_tointegerx: (L: LuaState, idx: number, isnum: number | null) => bigint;
    lua_toboolean: (L: LuaState, idx: number) => number;
    lua_tolstring: (L: LuaState, idx: number, len: number | null) => string;
    lua_rawlen: (L: LuaState, idx: number) => number;
    lua_tocfunction: (L: LuaState, idx: number) => number;
    lua_touserdata: (L: LuaState, idx: number) => number;
    lua_tothread: (L: LuaState, idx: number) => LuaState;
    lua_topointer: (L: LuaState, idx: number) => number;
    lua_arith: (L: LuaState, op: number) => void;
    lua_rawequal: (L: LuaState, idx1: number, idx2: number) => number;
    lua_compare: (L: LuaState, idx1: number, idx2: number, op: number) => number;
    lua_pushnil: (L: LuaState) => void;
    lua_pushnumber: (L: LuaState, n: number) => void;
    lua_pushinteger: (L: LuaState, n: bigint) => void;
    lua_pushlstring: (L: LuaState, s: string | number | null, len: number) => string;
    lua_pushstring: (L: LuaState, s: string | number | null) => string;
    lua_pushcclosure: (L: LuaState, fn: number, n: number) => void;
    lua_pushboolean: (L: LuaState, b: number) => void;
    lua_pushlightuserdata: (L: LuaState, p: number | null) => void;
    lua_pushthread: (L: LuaState) => number;
    lua_getglobal: (L: LuaState, name: string | null) => LuaType;
    lua_gettable: (L: LuaState, idx: number) => LuaType;
    lua_getfield: (L: LuaState, idx: number, k: string | null) => LuaType;
    lua_geti: (L: LuaState, idx: number, n: bigint) => LuaType;
    lua_rawget: (L: LuaState, idx: number) => number;
    lua_rawgeti: (L: LuaState, idx: number, n: bigint) => LuaType;
    lua_rawgetp: (L: LuaState, idx: number, p: number | null) => LuaType;
    lua_createtable: (L: LuaState, narr: number, nrec: number) => void;
    lua_newuserdatauv: (L: LuaState, sz: number, nuvalue: number) => number;
    lua_getmetatable: (L: LuaState, objindex: number) => number;
    lua_getiuservalue: (L: LuaState, idx: number, n: number) => LuaType;
    lua_setglobal: (L: LuaState, name: string | null) => void;
    lua_settable: (L: LuaState, idx: number) => void;
    lua_setfield: (L: LuaState, idx: number, k: string | null) => void;
    lua_seti: (L: LuaState, idx: number, n: bigint) => void;
    lua_rawset: (L: LuaState, idx: number) => void;
    lua_rawseti: (L: LuaState, idx: number, n: bigint) => void;
    lua_rawsetp: (L: LuaState, idx: number, p: number | null) => void;
    lua_setmetatable: (L: LuaState, objindex: number) => number;
    lua_setiuservalue: (L: LuaState, idx: number, n: number) => number;
    lua_callk: (L: LuaState, nargs: number, nresults: number, ctx: number, k: number | null) => void;
    lua_pcallk: (L: LuaState, nargs: number, nresults: number, errfunc: number, ctx: number, k: number | null) => number;
    lua_load: (L: LuaState, reader: number | null, dt: number | null, chunkname: string | null, mode: string | null) => LuaReturn;
    lua_dump: (L: LuaState, writer: number | null, data: number | null, strip: number) => number;
    lua_yieldk: (L: LuaState, nresults: number, ctx: number, k: number | null) => number;
    lua_resume: (L: LuaState, from: LuaState | null, narg: number, nres: number | null) => LuaReturn;
    lua_status: (L: LuaState) => LuaReturn;
    lua_isyieldable: (L: LuaState) => number;
    lua_setwarnf: (L: LuaState, f: number | null, ud: number | null) => void;
    lua_warning: (L: LuaState, msg: string | null, tocont: number) => void;
    lua_error: (L: LuaState) => number;
    lua_next: (L: LuaState, idx: number) => number;
    lua_concat: (L: LuaState, n: number) => void;
    lua_len: (L: LuaState, idx: number) => void;
    lua_stringtonumber: (L: LuaState, s: string | null) => number;
    lua_getallocf: (L: LuaState, ud: number | null) => number;
    lua_setallocf: (L: LuaState, f: number | null, ud: number | null) => void;
    lua_toclose: (L: LuaState, idx: number) => void;
    lua_closeslot: (L: LuaState, idx: number) => void;
    lua_getstack: (L: LuaState, level: number, ar: number | null) => number;
    lua_getinfo: (L: LuaState, what: string | null, ar: number | null) => number;
    lua_getlocal: (L: LuaState, ar: number | null, n: number) => string;
    lua_setlocal: (L: LuaState, ar: number | null, n: number) => string;
    lua_getupvalue: (L: LuaState, funcindex: number, n: number) => string;
    lua_setupvalue: (L: LuaState, funcindex: number, n: number) => string;
    lua_upvalueid: (L: LuaState, fidx: number, n: number) => number;
    lua_upvaluejoin: (L: LuaState, fidx1: number, n1: number, fidx2: number, n2: number) => void;
    lua_sethook: (L: LuaState, func: number | null, mask: number, count: number) => void;
    lua_gethook: (L: LuaState) => number;
    lua_gethookmask: (L: LuaState) => number;
    lua_gethookcount: (L: LuaState) => number;
    lua_setcstacklimit: (L: LuaState, limit: number) => number;
    luaopen_base: (L: LuaState) => number;
    luaopen_coroutine: (L: LuaState) => number;
    luaopen_table: (L: LuaState) => number;
    luaopen_io: (L: LuaState) => number;
    luaopen_os: (L: LuaState) => number;
    luaopen_string: (L: LuaState) => number;
    luaopen_utf8: (L: LuaState) => number;
    luaopen_math: (L: LuaState) => number;
    luaopen_debug: (L: LuaState) => number;
    luaopen_package: (L: LuaState) => number;
    luaL_openlibs: (L: LuaState) => void;
    private referenceTracker;
    private referenceMap;
    private availableReferences;
    private lastRefIndex?;
    constructor(module: LuaEmscriptenModule);
    lua_remove(luaState: LuaState, index: number): void;
    lua_pop(luaState: LuaState, count: number): void;
    luaL_getmetatable(luaState: LuaState, name: string): LuaType;
    lua_yield(luaState: LuaState, count: number): number;
    lua_upvalueindex(index: number): number;
    ref(data: unknown): number;
    unref(index: number): void;
    getRef(index: number): any | undefined;
    getLastRefIndex(): number | undefined;
    printRefs(): void;
    private cwrap;
}
export {};
