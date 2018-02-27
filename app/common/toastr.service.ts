import {Injectable} from '@angular/core'

declare let toastr: any

@Injectable()
export class ToastrService {

   toastrSuccess(message: string, title?: string) {
     toastr.success(message, title);
   }
 

}