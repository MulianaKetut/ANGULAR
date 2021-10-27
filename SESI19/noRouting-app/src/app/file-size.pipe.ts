import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(size: number, extension: string = 'MB'): string {
    switch (extension) {
      case 'KB':
        return `${size / 1024} ${extension}`;
      case 'MB':
        return `${size / 1024 / 1024} ${extension}`;
      case 'GB':
        return `${size / 1024 / 1024 / 1024} ${extension}`;
    }
    return '';
  }
}
