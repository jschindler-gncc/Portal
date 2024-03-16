import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class CompanyEditService {
    public createForm(): FormGroup {
        return new FormGroup({
            phone: new FormControl(''),
            location: new FormControl(''),
            email: new FormControl(''),
        });
    }
}