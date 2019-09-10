import { CreatePeer as CreatePeerEvent } from "../generated/Contract/Contract"
import { CreatePeer } from "../generated/schema"

export function handleCreatePeer(event: CreatePeerEvent): void {
  let entity = new CreatePeer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.peerContract = event.params.peerContract
  entity.swapContract = event.params.swapContract
  entity.peerContractOwner = event.params.peerContractOwner
  entity.save()
}
