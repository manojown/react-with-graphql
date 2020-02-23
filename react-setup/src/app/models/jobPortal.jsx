class JobPortalState {
  constructor(documents = []) {
    this.documents = documents;
    this.currentHold = {}
    // this.currentEditDoc = {}

  }
}

export { JobPortalState };
