import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Sponsor {
    name: string;
    short_name: string;
    link: string;
}

export interface Social {
    name: string;
    link: string;
    fa_icon: IconDefinition;
}