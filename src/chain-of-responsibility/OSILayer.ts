interface OSILayer {
    nextLayer(layer: OSILayer): void 
    handle(Data: string[]): void
}
