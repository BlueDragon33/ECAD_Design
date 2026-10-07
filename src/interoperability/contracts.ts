export type ArtifactProducer = {
  appId: 'cad-cam-3d' | 'ecad-design' | 'cae-simulation';
  projectId: string;
  projectRevision: string;
};

export type MechanicalFrame = {
  handedness: 'right-handed';
  upAxis: 'z';
  lengthUnit: 'mm';
};

export type EngineeringArtifactEnvelope<T> = {
  contractId: string;
  contractVersion: '1';
  artifactId: string;
  artifactRevision: string;
  producer: ArtifactProducer;
  createdAt: string;
  frame?: MechanicalFrame;
  contentHash?: string;
  payload: T;
};

export type MechanicalConstraintPackageV1 = EngineeringArtifactEnvelope<{
  allowedBoardEnvelopeMm?: { width: number; height: number };
  mountingTargets: readonly { id: string; xMm: number; yMm: number; diameterMm: number }[];
  keepOuts: readonly { id: string; xMm: number; yMm: number; zMm: number; widthMm: number; depthMm: number; heightMm: number }[];
  connectorTargets: readonly { id: string; xMm: number; yMm: number; zMm: number }[];
}> & { contractId: 'engineering.cad.mechanical-constraint-package' };

export type PcbMechanicalPackageV1 = EngineeringArtifactEnvelope<{
  boardId: string;
  outlineMm: readonly { xMm: number; yMm: number }[];
  thicknessMm: number;
  mountingHoles: readonly { id: string; xMm: number; yMm: number; diameterMm: number }[];
  componentEnvelopes: readonly {
    componentId: string;
    xMm: number;
    yMm: number;
    zMm: number;
    widthMm: number;
    depthMm: number;
    heightMm: number;
  }[];
}> & { contractId: 'engineering.ecad.pcb-mechanical-package' };
