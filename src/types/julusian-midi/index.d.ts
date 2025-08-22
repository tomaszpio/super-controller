declare module '@julusian/midi' {
  export type MidiMessage = number[];

  export class Input {
    on(event: string, cb: (deltaTime: number, message: MidiMessage) => void): void;
    openPort(index: number): void;
    closePort(): void;
    isPortOpen(): boolean;
  }

  export class Output {
    openPort(index: number): void;
    closePort(): void;
    isPortOpen(): boolean;
    sendMessage(message: MidiMessage): void;
  }
}
