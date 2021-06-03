import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	constructor(private readonly toast: ToastrService) {}

	ngOnInit(): void {}

	handleSubmit(e: any): void {
		e.preventDefault();
		this.toast.success('Successful', 'Message was send');
	}
}
