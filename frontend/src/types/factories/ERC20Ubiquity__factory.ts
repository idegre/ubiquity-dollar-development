/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20Ubiquity } from "../ERC20Ubiquity";

export class ERC20Ubiquity__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manager: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Ubiquity> {
    return super.deploy(
      _manager,
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC20Ubiquity>;
  }
  getDeployTransaction(
    _manager: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _manager,
      name_,
      symbol_,
      overrides || {}
    );
  }
  attach(address: string): ERC20Ubiquity {
    return super.attach(address) as ERC20Ubiquity;
  }
  connect(signer: Signer): ERC20Ubiquity__factory {
    return super.connect(signer) as ERC20Ubiquity__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Ubiquity {
    return new Contract(address, _abi, signerOrProvider) as ERC20Ubiquity;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_burned",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Burning",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Minting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract UbiquityAlgorithmicDollarManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newSymbol",
        type: "string",
      },
    ],
    name: "setSymbol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002374380380620023748339810160408190526200003491620004c5565b8151829082906200004d9060039060208501906200036c565b508051620000639060049060208401906200036c565b50506005805460ff19169055508151620000859060089060208501906200036c565b5080516200009b9060099060208401906200036c565b5060058054610100600160a81b0319166101006001600160a01b03868116820292909217928390556040805163a217fddf60e01b8152905191909304909116916391d1485491839163a217fddf916004808301926020929190829003018186803b1580156200010957600080fd5b505afa1580156200011e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000144919062000574565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b1580156200018257600080fd5b505afa15801562000197573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bd91906200054b565b6200021c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a206465706c6f796572206d757374206265206d616e616765722060448201526430b236b4b760d91b606482015260840160405180910390fd5b467f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000248620002d2565b805160209182012060408051808201825260018152603160f81b90840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152608081018290523060a082015260c0016040516020818303038152906040528051906020012060068190555050505050620005e0565b606060088054620002e3906200058d565b80601f016020809104026020016040519081016040528092919081815260200182805462000311906200058d565b8015620003625780601f10620003365761010080835404028352916020019162000362565b820191906000526020600020905b8154815290600101906020018083116200034457829003601f168201915b5050505050905090565b8280546200037a906200058d565b90600052602060002090601f0160209004810192826200039e5760008555620003e9565b82601f10620003b957805160ff1916838001178555620003e9565b82800160010185558215620003e9579182015b82811115620003e9578251825591602001919060010190620003cc565b50620003f7929150620003fb565b5090565b5b80821115620003f75760008155600101620003fc565b600082601f83011262000423578081fd5b81516001600160401b0380821115620004405762000440620005ca565b604051601f8301601f19908116603f011681019082821181831017156200046b576200046b620005ca565b8160405283815260209250868385880101111562000487578485fd5b8491505b83821015620004aa57858201830151818301840152908201906200048b565b83821115620004bb57848385830101525b9695505050505050565b600080600060608486031215620004da578283fd5b83516001600160a01b0381168114620004f1578384fd5b60208501519093506001600160401b03808211156200050e578384fd5b6200051c8783880162000412565b9350604086015191508082111562000532578283fd5b50620005418682870162000412565b9150509250925092565b6000602082840312156200055d578081fd5b815180151581146200056d578182fd5b9392505050565b60006020828403121562000586578081fd5b5051919050565b600181811c90821680620005a257607f821691505b60208210811415620005c457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611d8480620005f06000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80635c975abb116100e3578063a457c2d71161008c578063c47f002711610066578063c47f00271461034f578063d505accf14610362578063dd62ed3e1461037557610198565b8063a457c2d714610316578063a9059cbb14610329578063b84c82461461033c57610198565b80637ecebe00116100bd5780637ecebe00146102e65780638456cb591461030657806395d89b411461030e57610198565b80635c975abb146102b557806370a08231146102c057806379cc6790146102d357610198565b80633644e5151161014557806340c10f191161011f57806340c10f191461025f57806342966c6814610272578063481c6a751461028557610198565b80633644e5151461023957806339509351146102425780633f4ba83a1461025557610198565b806323b872dd1161017657806323b872dd146101f057806330adf81f14610203578063313ce5671461022a57610198565b806306fdde031461019d578063095ea7b3146101bb57806318160ddd146101de575b600080fd5b6101a56103ae565b6040516101b29190611c73565b60405180910390f35b6101ce6101c9366004611b50565b610440565b60405190151581526020016101b2565b6002545b6040519081526020016101b2565b6101ce6101fe366004611aa4565b610456565b6101e27f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b604051601281526020016101b2565b6101e260065481565b6101ce610250366004611b50565b610521565b61025d610558565b005b61025d61026d366004611b50565b6106ac565b61025d610280366004611c5b565b61088b565b60055461029d9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020016101b2565b60055460ff166101ce565b6101e26102ce366004611a51565b610912565b61025d6102e1366004611b50565b610931565b6101e26102f4366004611a51565b60076020526000908152604090205481565b61025d610b12565b6101a5610c64565b6101ce610324366004611b50565b610c73565b6101ce610337366004611b50565b610d26565b61025d61034a366004611bb1565b610d33565b61025d61035d366004611bb1565b610ea2565b61025d610370366004611adf565b61100d565b6101e2610383366004611a72565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600880546103bd90611cf5565b80601f01602080910402602001604051908101604052809291908181526020018280546103e990611cf5565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b5050505050905090565b600061044d33848461122c565b50600192915050565b6000610463848484611351565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105025760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61051685336105118685611cde565b61122c565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161044d918590610511908690611cc6565b6005546040805163e63ab1e960e01b815290516101009092046001600160a01b0316916391d1485491839163e63ab1e991600480820192602092909190829003018186803b1580156105a957600080fd5b505afa1580156105bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e19190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b15801561061e57600080fd5b505afa158015610632573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106569190611b79565b6106a25760405162461bcd60e51b815260206004820152601c60248201527f476f7665726e616e636520746f6b656e3a206e6f74207061757365720000000060448201526064016104f9565b6106aa6113a7565b565b60055460408051632f533cb760e01b815290516101009092046001600160a01b0316916391d14854918391632f533cb791600480820192602092909190829003018186803b1580156106fd57600080fd5b505afa158015610711573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107359190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b15801561077257600080fd5b505afa158015610786573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107aa9190611b79565b6107f65760405162461bcd60e51b815260206004820152601c60248201527f476f7665726e616e636520746f6b656e3a206e6f74206d696e7465720000000060448201526064016104f9565b60055460ff161561083c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f9565b6108468282611443565b60405181815233906001600160a01b038416907fb1233017d63154bc561d57c16f7b6a55e2e1acd7fcac94045a9f35fb31a850ca906020015b60405180910390a35050565b60055460ff16156108d15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f9565b6108da81611527565b60405181815233907f62626c8ae1f1f3ad3b2f42ba7b806bbc48e9a59dab06414984113eaab612fe479060200160405180910390a250565b6001600160a01b0381166000908152602081905260409020545b919050565b6005546040805163f39e5a4760e01b815290516101009092046001600160a01b0316916391d1485491839163f39e5a4791600480820192602092909190829003018186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b1580156109f757600080fd5b505afa158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190611b79565b610a7b5760405162461bcd60e51b815260206004820152601c60248201527f476f7665726e616e636520746f6b656e3a206e6f74206275726e65720000000060448201526064016104f9565b60055460ff1615610ac15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f9565b610acb8282611534565b816001600160a01b03167f62626c8ae1f1f3ad3b2f42ba7b806bbc48e9a59dab06414984113eaab612fe4782604051610b0691815260200190565b60405180910390a25050565b6005546040805163e63ab1e960e01b815290516101009092046001600160a01b0316916391d1485491839163e63ab1e991600480820192602092909190829003018186803b158015610b6357600080fd5b505afa158015610b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9b9190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b158015610bd857600080fd5b505afa158015610bec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c109190611b79565b610c5c5760405162461bcd60e51b815260206004820152601c60248201527f476f7665726e616e636520746f6b656e3a206e6f74207061757365720000000060448201526064016104f9565b6106aa61168f565b6060600980546103bd90611cf5565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610d0d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016104f9565b610d1c33856105118685611cde565b5060019392505050565b600061044d338484611351565b6005546040805163a217fddf60e01b815290516101009092046001600160a01b0316916391d1485491839163a217fddf91600480820192602092909190829003018186803b158015610d8457600080fd5b505afa158015610d98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbc9190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b158015610df957600080fd5b505afa158015610e0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e319190611b79565b610e8b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a206465706c6f796572206d757374206265206d616e616765722060448201526430b236b4b760d91b60648201526084016104f9565b8051610e9e9060099060208401906119a1565b5050565b6005546040805163a217fddf60e01b815290516101009092046001600160a01b0316916391d1485491839163a217fddf91600480820192602092909190829003018186803b158015610ef357600080fd5b505afa158015610f07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2b9190611b99565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b158015610f6857600080fd5b505afa158015610f7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa09190611b79565b610ffa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a206465706c6f796572206d757374206265206d616e616765722060448201526430b236b4b760d91b60648201526084016104f9565b8051610e9e9060089060208401906119a1565b4284101561105d5760405162461bcd60e51b815260206004820152600f60248201527f446f6c6c61723a2045585049524544000000000000000000000000000000000060448201526064016104f9565b6006546001600160a01b038816600090815260076020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876110b083611d30565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161112992919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611194573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906111ca5750886001600160a01b0316816001600160a01b0316145b6112165760405162461bcd60e51b815260206004820152601960248201527f446f6c6c61723a20494e56414c49445f5349474e41545552450000000000000060448201526064016104f9565b61122189898961122c565b505050505050505050565b6001600160a01b03831661128e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f9565b6001600160a01b0382166112ef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f9565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60055460ff16156113975760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f9565b6113a283838361170a565b505050565b60055460ff166113f95760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104f9565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166114995760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f9565b6114a56000838361191c565b80600260008282546114b79190611cc6565b90915550506001600160a01b038216600090815260208190526040812080548392906114e4908490611cc6565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161087f565b6115313382611534565b50565b6001600160a01b0382166115945760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f9565b6115a08260008361191c565b6001600160a01b038216600090815260208190526040902054818110156116145760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f9565b61161e8282611cde565b6001600160a01b0384166000908152602081905260408120919091556002805484929061164c908490611cde565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611344565b60055460ff16156116d55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f9565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586114263390565b6001600160a01b0383166117865760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104f9565b6001600160a01b0382166117e85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f9565b6117f383838361191c565b6001600160a01b038316600090815260208190526040902054818110156118825760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104f9565b61188c8282611cde565b6001600160a01b0380861660009081526020819052604080822093909355908516815290812080548492906118c2908490611cc6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161190e91815260200190565b60405180910390a350505050565b6113a283838361192e60055460ff1690565b156113a25760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016104f9565b8280546119ad90611cf5565b90600052602060002090601f0160209004810192826119cf5760008555611a15565b82601f106119e857805160ff1916838001178555611a15565b82800160010185558215611a15579182015b82811115611a155782518255916020019190600101906119fa565b50611a21929150611a25565b5090565b5b80821115611a215760008155600101611a26565b80356001600160a01b038116811461092c57600080fd5b600060208284031215611a62578081fd5b611a6b82611a3a565b9392505050565b60008060408385031215611a84578081fd5b611a8d83611a3a565b9150611a9b60208401611a3a565b90509250929050565b600080600060608486031215611ab8578081fd5b611ac184611a3a565b9250611acf60208501611a3a565b9150604084013590509250925092565b600080600080600080600060e0888a031215611af9578283fd5b611b0288611a3a565b9650611b1060208901611a3a565b95506040880135945060608801359350608088013560ff81168114611b33578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611b62578182fd5b611b6b83611a3a565b946020939093013593505050565b600060208284031215611b8a578081fd5b81518015158114611a6b578182fd5b600060208284031215611baa578081fd5b5051919050565b600060208284031215611bc2578081fd5b813567ffffffffffffffff80821115611bd9578283fd5b818401915084601f830112611bec578283fd5b813581811115611bfe57611bfe611d61565b604051601f8201601f19908116603f01168101908382118183101715611c2657611c26611d61565b81604052828152876020848701011115611c3e578586fd5b826020860160208301379182016020019490945295945050505050565b600060208284031215611c6c578081fd5b5035919050565b6000602080835283518082850152825b81811015611c9f57858101830151858201604001528201611c83565b81811115611cb05783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611cd957611cd9611d4b565b500190565b600082821015611cf057611cf0611d4b565b500390565b600181811c90821680611d0957607f821691505b60208210811415611d2a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611d4457611d44611d4b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000803000a";