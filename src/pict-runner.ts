/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */
import createModule from '@takeyaqa/pict-node'

interface Parameter {
  name: string
  values: string[]
}

interface Output {
  header: string[]
  body: string[][]
}

export class PictRunner {
  private pict: any
  private stdoutCapture: OutputCapture
  private stderrCapture: OutputCapture

  constructor() {
    this.stdoutCapture = new OutputCapture()
    this.stderrCapture = new OutputCapture()
  }

  public async init(): Promise<void> {
    this.pict = await createModule({
      print: this.stdoutCapture.capture,
      printErr: this.stderrCapture.capture,
    })
  }

  public run(parameters: Parameter[]): Output {
    if (!this.pict) {
      throw new Error('PictRunner not initialized')
    }
    const parametersText = parameters
      .map((m) => `${m.name}: ${m.values.join(', ')}`)
      .join('\n')

    this.pict.FS.writeFile('model.txt', parametersText)
    this.pict.callMain(['model.txt'])
    this.pict.FS.unlink('model.txt')
    const err = this.stderrCapture.getOuts()
    if (err) {
      throw new Error(err)
    }
    const out = this.stdoutCapture
      .getOuts()
      .split('\n')
      .map((m) => m.split('\t'))
    this.stdoutCapture.clear()
    return { header: out[0], body: out.slice(1) }
  }
}

class OutputCapture {
  private outs: string[] = []
  public capture = (line: string) => {
    this.outs.push(line)
  }

  public getOuts(): string {
    const out = this.outs.join('\n')
    this.clear()
    return out
  }

  public clear(): void {
    this.outs = []
  }
}
