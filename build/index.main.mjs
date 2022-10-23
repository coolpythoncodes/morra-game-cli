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
      1: [ctc0, ctc1]
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
  
  
  const v111 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v114 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:52:55:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:13:function exp)'],
    msg: 'getFingers',
    who: 'Alice'
    });
  const v115 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:53:51:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:13:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v111, v114, v115],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v111, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v117, v118, v119], secs: v121, time: v120, didSend: v58, from: v116 } = txn1;
      
      sim_r.txns.push({
        amt: v117,
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
  const {data: [v117, v118, v119], secs: v121, time: v120, didSend: v58, from: v116 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v129, v130], secs: v132, time: v131, didSend: v69, from: v128 } = txn2;
  ;
  const v134 = stdlib.safeAdd(v118, v129);
  const v135 = stdlib.eq(v119, v134);
  const v136 = stdlib.eq(v130, v134);
  const v154 = v136 ? stdlib.checkedBigNumberify('./index.rsh:18:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:20:12:decimal', stdlib.UInt_max, '2');
  const v133 = v135 ? stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '0') : v154;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v133), {
    at: './index.rsh:74:24:application',
    fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
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
  const {data: [v117, v118, v119], secs: v121, time: v120, didSend: v58, from: v116 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v117), {
    at: './index.rsh:61:25:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v126 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:62:55:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'getFingers',
    who: 'Bob'
    });
  const v127 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:63:51:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v116, v117, v126, v127],
    evt_cnt: 2,
    funcNum: 1,
    lct: v120,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v129, v130], secs: v132, time: v131, didSend: v69, from: v128 } = txn2;
      
      ;
      const v134 = stdlib.safeAdd(v118, v129);
      const v135 = stdlib.eq(v119, v134);
      const v136 = stdlib.eq(v130, v134);
      const v154 = v136 ? stdlib.checkedBigNumberify('./index.rsh:18:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:20:12:decimal', stdlib.UInt_max, '2');
      const v133 = v135 ? stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '0') : v154;
      sim_r.txns.push({
        kind: 'from',
        to: v116,
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
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v129, v130], secs: v132, time: v131, didSend: v69, from: v128 } = txn2;
  ;
  const v134 = stdlib.safeAdd(v118, v129);
  const v135 = stdlib.eq(v119, v134);
  const v136 = stdlib.eq(v130, v134);
  const v154 = v136 ? stdlib.checkedBigNumberify('./index.rsh:18:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:20:12:decimal', stdlib.UInt_max, '2');
  const v133 = v135 ? stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '0') : v154;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v133), {
    at: './index.rsh:74:24:application',
    fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
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
  appApproval: `ByADAAEIJgIAAQAiNQAxGEEBIihkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAASyMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFSSJbNf8kWzX+gATHtgrVNP8WUDT+FlCwsSKyATQDgSBbsggjshA0A1cAILIHs0IAWkiBoI0GiADAIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/4gAhjEANP8WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v119",
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
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v119",
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
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
  Bytecode: `0x6080604052604051610772380380610772833981016040819052610022916101f1565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a160208101515161009690341460076100f9565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100f19260029290910190610122565b5050506102be565b8161011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012e90610283565b90600052602060002090601f0160209004810192826101505760008555610196565b82601f1061016957805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019657825182559160200191906001019061017b565b506101a29291506101a6565b5090565b5b808211156101a257600081556001016101a7565b604051606081016001600160401b03811182821017156101eb57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561020457600080fd5b604080519081016001600160401b038111828210171561023457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561024d57600080fd5b6102556101bb565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c9082168061029757607f821691505b602082108114156102b857634e487b7160e01b600052602260045260246000fd5b50919050565b6104a5806102cd6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610353565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61023b565b60405161006492919061036b565b6100c860016000541460096102d8565b6100e2813515806100db57506001548235145b600a6102d8565b6000808055600280546100f4906103c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103c8565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103fd565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101e3341560086102d8565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610220573d6000803e3d6000fd5b5060008080556001819055610237906002906102fd565b5050565b600060606000546002808054610250906103c8565b80601f016020809104026020016040519081016040528092919081815260200182805461027c906103c8565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b50505050509050915091509091565b816102375760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610309906103c8565b6000825580601f10610319575050565b601f016020900490600052602060002090810190610337919061033a565b50565b5b8082111561034f576000815560010161033b565b5090565b60006060828403121561036557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561039f57858101830151858201606001528201610383565b818111156103b1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103dc57607f821691505b6020821081141561036557634e487b7160e01b600052602260045260246000fd5b60006040828403121561040f57600080fd5b6040516040810181811067ffffffffffffffff8211171561044057634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461045a57600080fd5b8152602092830151928101929092525091905056fea26469706673582212208e132d5f7043ceea5db101ce257b5f23cd606caa6780970003f4c31900a8a25a64736f6c634300080c0033`,
  BytecodeLen: 1906,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:71:3:after expr stmt',
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
