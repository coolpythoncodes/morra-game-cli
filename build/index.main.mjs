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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Null;
  
  
  const v130 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v133 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:54:55:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:13:function exp)'],
    msg: 'getFingers',
    who: 'Alice'
    });
  const v134 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:55:51:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:13:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v130, v133, v134],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v130, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136, v137, v138], secs: v140, time: v139, didSend: v59, from: v135 } = txn1;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v136, v137, v138], secs: v140, time: v139, didSend: v59, from: v135 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v148, v149], secs: v151, time: v150, didSend: v72, from: v147 } = txn2;
  ;
  const v155 = stdlib.safeAdd(v137, v148);
  const v156 = stdlib.eq(v138, v155);
  const v157 = stdlib.eq(v149, v155);
  const v190 = v157 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
  const v154 = v156 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v190;
  const v159 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v160 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v168 = v160 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v170 = v159 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '0')];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '1')];
  const v173 = stdlib.safeMul(v171, v136);
  ;
  const v178 = stdlib.safeMul(v172, v136);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v154), {
    at: './index.rsh:84:24:application',
    fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:19:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136, v137, v138], secs: v140, time: v139, didSend: v59, from: v135 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v136), {
    at: './index.rsh:66:25:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v145 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:67:55:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'getFingers',
    who: 'Bob'
    });
  const v146 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:68:51:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v135, v136, v137, v138, v145, v146],
    evt_cnt: 2,
    funcNum: 1,
    lct: v139,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v136, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v148, v149], secs: v151, time: v150, didSend: v72, from: v147 } = txn2;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v155 = stdlib.safeAdd(v137, v148);
      const v156 = stdlib.eq(v138, v155);
      const v157 = stdlib.eq(v149, v155);
      const v190 = v157 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
      const v154 = v156 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v190;
      const v159 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v160 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v168 = v160 ? v166 : v167;
      const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v170 = v159 ? v169 : v168;
      const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '0')];
      const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '1')];
      const v173 = stdlib.safeMul(v171, v136);
      sim_r.txns.push({
        kind: 'from',
        to: v135,
        tok: undefined /* Nothing */
        });
      const v178 = stdlib.safeMul(v172, v136);
      sim_r.txns.push({
        kind: 'from',
        to: v147,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v148, v149], secs: v151, time: v150, didSend: v72, from: v147 } = txn2;
  ;
  const v155 = stdlib.safeAdd(v137, v148);
  const v156 = stdlib.eq(v138, v155);
  const v157 = stdlib.eq(v149, v155);
  const v190 = v157 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
  const v154 = v156 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v190;
  const v159 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v160 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v168 = v160 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v170 = v159 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '0')];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:76:9:array', stdlib.UInt_max, '1')];
  const v173 = stdlib.safeMul(v171, v136);
  ;
  const v178 = stdlib.safeMul(v172, v136);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v154), {
    at: './index.rsh:84:24:application',
    fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:19:function exp)'],
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
  appApproval: `ByAEAAEIAiYCAAEAIjUAMRhBAawoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAM0jEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/0k1BUkiWzX+JFs1/YAEx7YK1TT+FlA0/RZQsDT/iAFfNAOBKFs0/gg1/CUjNP00/BJNIjQDgTBbNPwSTTX7gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPsjEk2AEAAAAAAAAAACAAAAAAAAAAA0+yISTTX6sSKyATT6Ils0/wuyCCOyEDQDVwAgsgezsSKyATT6JFs0/wuyCCOyEDEAsgezQgBiSIGgjQaIAMciNAESRDQESSISTDQCEhFESTUFSUkiWzX/JFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDT/iACNMQA0/xZQNP4WUDT9FlApSwFXADhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
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
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
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
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610ab5380380610ab583398101604081905261002291610243565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1602081015151610096903414600761014b565b6100ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a090930190528151610143926002920190610174565b505050610310565b816101705760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610180906102d5565b90600052602060002090601f0160209004810192826101a257600085556101e8565b82601f106101bb57805160ff19168380011785556101e8565b828001600101855582156101e8579182015b828111156101e85782518255916020019190600101906101cd565b506101f49291506101f8565b5090565b5b808211156101f457600081556001016101f9565b604051606081016001600160401b038111828210171561023d57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561025657600080fd5b604080519081016001600160401b038111828210171561028657634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561029f57600080fd5b6102a761020d565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806102e957607f821691505b6020821081141561030a57634e487b7160e01b600052602260045260246000fd5b50919050565b6107968061031f6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046105be565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61034e565b6040516100649291906105d6565b6100c860016000541460096103eb565b6100e2813515806100db57506001548235145b600a6103eb565b6000808055600280546100f490610633565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610633565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610668565b905061018f6104c7565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101ef8260200151341460086103eb565b6040820151610202906020850135610415565b60208201819052606083015114610230576020810151604084013514610229576002610233565b6001610233565b60005b815260408101805160009081905290516002602091820181905260608401805160019081905290518301526080840180519190915251015280511561028f578051600114610285578060600151610295565b8060400151610295565b80608001515b60a082018190528251905160208401516001600160a01b03909216916108fc916102be91610468565b6040518115909202916000818181858888f193505050501580156102e6573d6000803e3d6000fd5b50336001600160a01b03166108fc61030a8360a00151602001518560200151610468565b6040518115909202916000818181858888f19350505050158015610332573d6000803e3d6000fd5b506000808055600181905561034990600290610568565b505050565b60006060600054600280805461036390610633565b80601f016020809104026020016040519081016040528092919081815260200182805461038f90610633565b80156103dc5780601f106103b1576101008083540402835291602001916103dc565b820191906000526020600020905b8154815290600101906020018083116103bf57829003601f168201915b50505050509050915091509091565b816104115760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826104228382610707565b91508110156104625760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610408565b92915050565b600081158061048c5750828261047e818361071f565b925061048a908361073e565b145b6104625760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610408565b6040518060c0016040528060008152602001600081526020016104fd604051806040016040528060008152602001600081525090565b815260200161051f604051806040016040528060008152602001600081525090565b8152602001610541604051806040016040528060008152602001600081525090565b8152602001610563604051806040016040528060008152602001600081525090565b905290565b50805461057490610633565b6000825580601f10610584575050565b601f0160209004906000526020600020908101906105a291906105a5565b50565b5b808211156105ba57600081556001016105a6565b5090565b6000606082840312156105d057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561060a578581018301518582016060015282016105ee565b8181111561061c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061064757607f821691505b602082108114156105d057634e487b7160e01b600052602260045260246000fd5b60006080828403121561067a57600080fd5b6040516080810181811067ffffffffffffffff821117156106ab57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106c557600080fd5b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561071a5761071a6106f1565b500190565b6000816000190483118215151615610739576107396106f1565b500290565b60008261075b57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122017c6afc4b540349c6649590ca6f3b28b663925d86f97b5d27e56aeffd641fd0164736f6c634300080c0033`,
  BytecodeLen: 2741,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:81:3:after expr stmt',
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
