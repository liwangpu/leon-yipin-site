import { FormGroup } from '@angular/forms';

export class FormGroupHelper {

    static toFormData(form: FormGroup): FormData {
        let data = form.value;
        let formData = new FormData();
        for (let it in data)
            formData.append(it, data[it]);
        return formData;
    }
}
