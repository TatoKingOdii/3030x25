import {Directive, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'catUrl'
})
export class CatDirective implements PipeTransform {
    transform(size: number, ...args: any[]) {
      return `https://placekitten.com/${size}/${size}`;
    }
}
