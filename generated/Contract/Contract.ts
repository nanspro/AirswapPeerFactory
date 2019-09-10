// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatePeer extends EthereumEvent {
  get params(): CreatePeer__Params {
    return new CreatePeer__Params(this);
  }
}

export class CreatePeer__Params {
  _event: CreatePeer;

  constructor(event: CreatePeer) {
    this._event = event;
  }

  get peerContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swapContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get peerContractOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  has(_locator: Bytes): boolean {
    let result = super.call("has", [EthereumValue.fromFixedBytes(_locator)]);
    return result[0].toBoolean();
  }

  createPeer(_swapContract: Address, _peerContractOwner: Address): Address {
    let result = super.call("createPeer", [
      EthereumValue.fromAddress(_swapContract),
      EthereumValue.fromAddress(_peerContractOwner)
    ]);
    return result[0].toAddress();
  }
}

export class CreatePeerCall extends EthereumCall {
  get inputs(): CreatePeerCall__Inputs {
    return new CreatePeerCall__Inputs(this);
  }

  get outputs(): CreatePeerCall__Outputs {
    return new CreatePeerCall__Outputs(this);
  }
}

export class CreatePeerCall__Inputs {
  _call: CreatePeerCall;

  constructor(call: CreatePeerCall) {
    this._call = call;
  }

  get _swapContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _peerContractOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreatePeerCall__Outputs {
  _call: CreatePeerCall;

  constructor(call: CreatePeerCall) {
    this._call = call;
  }

  get peerContractAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
