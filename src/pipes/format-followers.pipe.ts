import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'formatFollowers'
})
export class FormatFollowersPipe implements PipeTransform {
    transform(value: number): string {
        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(2)}M`;
        } else if (value >= 1_000) {
            return `${(value / 1_000).toFixed(1)}K`;
        } else {
            return value.toString();
        }
    }
}
