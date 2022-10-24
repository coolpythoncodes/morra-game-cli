// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc2, ctc1],
      6: [ctc0, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v170 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v170],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v170, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v174], secs: v176, time: v175, didSend: v55, from: v173 } = txn1;
      
      sim_r.txns.push({
        amt: v174,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v55, from: v173 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v183, time: v182, didSend: v64, from: v181 } = txn2;
  ;
  let v186 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v187 = v182;
  
  let txn3 = txn2;
  while (await (async () => {
    const v202 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v202;})()) {
    const v205 = stdlib.protect(ctc0, await interact.getGuess(), {
      at: './index.rsh:72:53:application',
      fs: ['at ./index.rsh:71:11:application call to [unknown function] (defined at: ./index.rsh:71:15:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    const v206 = stdlib.protect(ctc0, await interact.getFingers(), {
      at: './index.rsh:73:47:application',
      fs: ['at ./index.rsh:71:11:application call to [unknown function] (defined at: ./index.rsh:71:15:function exp)'],
      msg: 'getFingers',
      who: 'Alice'
      });
    const v207 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:74:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:11:application call to [unknown function] (defined at: ./index.rsh:71:15:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v208 = stdlib.digest([ctc0, ctc0], [v207, v206]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v173, v174, v181, v208, v205],
      evt_cnt: 2,
      funcNum: 3,
      lct: v187,
      onlyIf: true,
      out_tys: [ctc1, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:77:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v211, v212], secs: v214, time: v213, didSend: v92, from: v210 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v211, v212], secs: v214, time: v213, didSend: v92, from: v210 } = txn4;
    ;
    const v215 = stdlib.addressEq(v173, v210);
    stdlib.assert(v215, {
      at: './index.rsh:77:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v221, v222], secs: v224, time: v223, didSend: v104, from: v220 } = txn5;
    ;
    const v225 = stdlib.addressEq(v181, v220);
    stdlib.assert(v225, {
      at: './index.rsh:86:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v173, v174, v181, v211, v212, v221, v222, v207, v206],
      evt_cnt: 2,
      funcNum: 5,
      lct: v223,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v229, v230], secs: v232, time: v231, didSend: v114, from: v228 } = txn6;
        
        ;
        const v237 = stdlib.safeAdd(v230, v221);
        const v238 = stdlib.eq(v212, v237);
        const v239 = stdlib.eq(v222, v237);
        const v258 = v239 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
        const v236 = v238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v258;
        const cv186 = v236;
        const cv187 = v231;
        
        await (async () => {
          const v186 = cv186;
          const v187 = cv187;
          
          if (await (async () => {
            const v202 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            
            return v202;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v241 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v244 = stdlib.safeMul(v174, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '2'));
            const v246 = v241 ? v173 : v181;
            sim_r.txns.push({
              kind: 'from',
              to: v246,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v229, v230], secs: v232, time: v231, didSend: v114, from: v228 } = txn6;
    ;
    const v233 = stdlib.addressEq(v173, v228);
    stdlib.assert(v233, {
      at: './index.rsh:93:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v234 = stdlib.digest([ctc0, ctc0], [v229, v230]);
    const v235 = stdlib.digestEq(v211, v234);
    stdlib.assert(v235, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v237 = stdlib.safeAdd(v230, v221);
    const v238 = stdlib.eq(v212, v237);
    const v239 = stdlib.eq(v222, v237);
    const v258 = v239 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
    const v236 = v238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v258;
    const cv186 = v236;
    const cv187 = v231;
    
    v186 = cv186;
    v187 = cv187;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v241 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v244 = stdlib.safeMul(v174, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '2'));
  const v246 = v241 ? v173 : v181;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v186), {
    at: './index.rsh:106:24:application',
    fs: ['at ./index.rsh:105:7:application call to [unknown function] (defined at: ./index.rsh:105:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v55, from: v173 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v174), {
    at: './index.rsh:62:25:application',
    fs: ['at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v173, v174],
    evt_cnt: 0,
    funcNum: 1,
    lct: v175,
    onlyIf: true,
    out_tys: [],
    pay: [v174, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v183, time: v182, didSend: v64, from: v181 } = txn2;
      
      sim_r.txns.push({
        amt: v174,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v186 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v187 = v182;
      
      if (await (async () => {
        const v202 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v202;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v241 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v244 = stdlib.safeMul(v174, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '2'));
        const v246 = v241 ? v173 : v181;
        sim_r.txns.push({
          kind: 'from',
          to: v246,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v183, time: v182, didSend: v64, from: v181 } = txn2;
  ;
  let v186 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v187 = v182;
  
  let txn3 = txn2;
  while (await (async () => {
    const v202 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v202;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v211, v212], secs: v214, time: v213, didSend: v92, from: v210 } = txn4;
    ;
    const v215 = stdlib.addressEq(v173, v210);
    stdlib.assert(v215, {
      at: './index.rsh:77:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v218 = stdlib.protect(ctc0, await interact.getFingers(), {
      at: './index.rsh:83:57:application',
      fs: ['at ./index.rsh:82:11:application call to [unknown function] (defined at: ./index.rsh:82:15:function exp)'],
      msg: 'getFingers',
      who: 'Bob'
      });
    const v219 = stdlib.protect(ctc0, await interact.getGuess(), {
      at: './index.rsh:84:53:application',
      fs: ['at ./index.rsh:82:11:application call to [unknown function] (defined at: ./index.rsh:82:15:function exp)'],
      msg: 'getGuess',
      who: 'Bob'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v173, v174, v181, v211, v212, v218, v219],
      evt_cnt: 2,
      funcNum: 4,
      lct: v213,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:86:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v221, v222], secs: v224, time: v223, didSend: v104, from: v220 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v221, v222], secs: v224, time: v223, didSend: v104, from: v220 } = txn5;
    ;
    const v225 = stdlib.addressEq(v181, v220);
    stdlib.assert(v225, {
      at: './index.rsh:86:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v229, v230], secs: v232, time: v231, didSend: v114, from: v228 } = txn6;
    ;
    const v233 = stdlib.addressEq(v173, v228);
    stdlib.assert(v233, {
      at: './index.rsh:93:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v234 = stdlib.digest([ctc0, ctc0], [v229, v230]);
    const v235 = stdlib.digestEq(v211, v234);
    stdlib.assert(v235, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v237 = stdlib.safeAdd(v230, v221);
    const v238 = stdlib.eq(v212, v237);
    const v239 = stdlib.eq(v222, v237);
    const v258 = v239 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
    const v236 = v238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v258;
    const cv186 = v236;
    const cv187 = v231;
    
    v186 = cv186;
    v187 = cv187;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v241 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v244 = stdlib.safeMul(v174, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '2'));
  const v246 = v241 ? v173 : v181;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v186), {
    at: './index.rsh:106:24:application',
    fs: ['at ./index.rsh:105:7:application call to [unknown function] (defined at: ./index.rsh:105:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAKAAEFIAIIBAMGaCYDAQAAAQEiNQAxGEECyylkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQcMQAF+SSEGDEABDUkkDEAAgiQSRCEINAESRDQESSISTDQCEhFEKGQqZFBJNQNXACA1/0k1BUkiWzX+IQVbNf2ABLNR9480/hZQNP0WULA0/zEAEkQ0A1dIIDT+FjT9FlABEkQ0/TQDgXBbCDX8NP80AyVbNANXKCAhBCM0A4F4WzT8Ek0iNAMhCVs0/BJNMgZCAXNIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+VyggNf1XSCA1/CEJWzX7STUFSSJbNfohBVs1+YAEEEatczT6FlA0+RZQsDT9MQASRDT/NP4WUDT9UDT8UDT7FlA0+hZQNPkWUChLAVcAf2cqSwFXfwFnSCEINQEyBjUCQgFUSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/lcoIDX9STUFSVcAIDX8JVs1+4AEHUa0ITT8UDT7FlCwNP8xABJENP80/hZQNP1QNPxQNPsWUChLAVcAcGdIJDUBMgY1AkIA6kkjDEAAOCMSRCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwNP+IAQ40A1cAIDT/MQAhBDIGQgBGSIGgjQaIAPYiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gA0DEANP8WUChLAVcAKGdIIzUBMgY1AkIAZjX/Nf41/TX8Nfs0/iEEEkEAHDT7NPwWUDT9UChLAVcASGdIIQY1ATIGNQJCADixIrIBNPwhBAuyCCOyEDT9NPs0/iISTbIHs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001330380380620013308339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61108280620002ae6000396000f3fe60806040526004361061006e5760003560e01c8063ab53f2c61161004b578063ab53f2c6146100c3578063ad2d91d1146100e6578063aff5115f146100f9578063ebdbfdcc1461010c57005b80631e93b0f1146100775780632c10a1591461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c74565b61011f565b3480156100ba57600080fd5b50600154610088565b3480156100cf57600080fd5b506100d8610281565b604051610092929190610c8c565b6100756100f4366004610cfb565b61031e565b610075610107366004610cfb565b610532565b61007561011a366004610cfb565b61074c565b61012f6001600054146009610972565b6101498135158061014257506001548235145b600a610972565b60008080556002805461015b90610d1e565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610d1e565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610d6f565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610dd4565b60405180910390a1610238816020015134146008610972565b610240610b5a565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160029052514391015261027c8161099c565b505050565b60006060600054600280805461029690610d1e565b80601f01602080910402602001604051908101604052809291908181526020018280546102c290610d1e565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b50505050509050915091509091565b61032e600460005414600d610972565b6103488135158061034157506001548235145b600e610972565b60008080556002805461035a90610d1e565b80601f016020809104026020016040519081016040528092919081815260200182805461038690610d1e565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b50505050508060200190518101906103eb9190610e11565b90507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338360405161041e929190610e84565b60405180910390a16104323415600b610972565b805161044a906001600160a01b03163314600c610972565b61048e6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081528884013560608089019182528a8401356080808b01918252600560005543600155855197880198909852945193860193909352905190951690830152925191810191909152905160a082015260c0015b6040516020818303038152906040526002908051906020019061052c929190610ba5565b50505050565b6105426006600054146016610972565b61055c8135158061055557506001548235145b6017610972565b60008080556002805461056e90610d1e565b80601f016020809104026020016040519081016040528092919081815260200182805461059a90610d1e565b80156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b50505050508060200190518101906105ff9190610eb5565b90506106176040518060200160405280600081525090565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610648929190610e84565b60405180910390a161065c34156013610972565b8151610674906001600160a01b031633146014610972565b604080516106c09161069a91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360600151146015610972565b6106d583602001602001358360a00151610aa8565b81526106df610b5a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216910152815160808401511461072f57815160c084015114610728576002610732565b6001610732565b60005b602080830180519290925290514391015261052c8161099c565b61075c6005600054146011610972565b6107768135158061076f57506001548235145b6012610972565b60008080556002805461078890610d1e565b80601f01602080910402602001604051908101604052809291908181526020018280546107b490610d1e565b80156108015780601f106107d657610100808354040283529160200191610801565b820191906000526020600020905b8154815290600101906020018083116107e457829003601f168201915b50505050508060200190518101906108199190610f53565b90507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338360405161084c929190610e84565b60405180910390a16108603415600f610972565b604081015161087b906001600160a01b031633146010610972565b6108cd6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b019081528c88013560a0808d019182528e88013560c0808f0191825260066000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e082015261010001610508565b816109985760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60208101515160021415610a2d576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261027c9260029290910190610ba5565b60208101515115610a4357805160400151610a47565b8051515b6001600160a01b03166108fc610a668360000151602001516002610afb565b6040518115909202916000818181858888f19350505050158015610a8e573d6000803e3d6000fd5b5060008080556001819055610aa590600290610c29565b50565b600082610ab58382610ff3565b9150811015610af55760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161098f565b92915050565b6000811580610b1f57508282610b11818361100b565b9250610b1d908361102a565b145b610af55760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161098f565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610ba0604051806040016040528060008152602001600081525090565b905290565b828054610bb190610d1e565b90600052602060002090601f016020900481019282610bd35760008555610c19565b82601f10610bec57805160ff1916838001178555610c19565b82800160010185558215610c19579182015b82811115610c19578251825591602001919060010190610bfe565b50610c25929150610c5f565b5090565b508054610c3590610d1e565b6000825580601f10610c45575050565b601f016020900490600052602060002090810190610aa591905b5b80821115610c255760008155600101610c60565b600060408284031215610c8657600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610cc057858101830151858201606001528201610ca4565b81811115610cd2576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610c8657600080fd5b600060608284031215610d0d57600080fd5b610d178383610ce9565b9392505050565b600181811c90821680610d3257607f821691505b60208210811415610c8657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d6a57600080fd5b919050565b600060408284031215610d8157600080fd5b6040516040810181811067ffffffffffffffff82111715610db257634e487b7160e01b600052604160045260246000fd5b604052610dbe83610d53565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610e0257600080fd5b80604085015250509392505050565b600060608284031215610e2357600080fd5b6040516060810181811067ffffffffffffffff82111715610e5457634e487b7160e01b600052604160045260246000fd5b604052610e6083610d53565b815260208301516020820152610e7860408401610d53565b60408201529392505050565b6001600160a01b038316815260808101610d1760208301848035825260208082013590830152604090810135910152565b600060e08284031215610ec757600080fd5b60405160e0810181811067ffffffffffffffff82111715610ef857634e487b7160e01b600052604160045260246000fd5b604052610f0483610d53565b815260208301516020820152610f1c60408401610d53565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060a08284031215610f6557600080fd5b60405160a0810181811067ffffffffffffffff82111715610f9657634e487b7160e01b600052604160045260246000fd5b604052610fa283610d53565b815260208301516020820152610fba60408401610d53565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561100657611006610fdd565b500190565b600081600019048311821515161561102557611025610fdd565b500290565b60008261104757634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206d868bab399aa8ed26dd7f65ee04f9f36c31858a63e9fb974bf56d2139ca4cc964736f6c634300080c0033`,
  BytecodeLen: 4912,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:103:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:78:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:87:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
