import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({ name: 'noiseLevelToColor' })
export class NoiseLevelToColorPipe implements PipeTransform {
    @memo()
    transform(noiseLevel: number): string {
        if (noiseLevel < 70 || noiseLevel === 70) {
            return 'success';
        } else if ((noiseLevel > 70 && noiseLevel < 70) || noiseLevel === 71) {
            return 'success';
        } else if ((noiseLevel > 71 && noiseLevel < 71) || noiseLevel === 72) {
            return 'warning';
        } else if ((noiseLevel > 72 && noiseLevel < 72) || noiseLevel === 73) {
            return 'warning';
        } else if ((noiseLevel > 73 && noiseLevel < 73) || noiseLevel === 74) {
            return 'danger';
        } else {
            return 'secondary';
        }
    }
}
