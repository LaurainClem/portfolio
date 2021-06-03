import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	contactForm!: FormGroup;

	constructor(
		private readonly toast: ToastrService,
		private fb: FormBuilder,
		private readonly translate: TranslateService,
		private readonly contact: ContactService,
	) {}

	ngOnInit(): void {
		this.contactForm = this.fb.group({
			firstName: ['', [Validators.required]],
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required]],
		});
	}

	async handleSubmit(e: any): Promise<void> {
		e.preventDefault();
		if (this.contactForm.valid) {
			this.contact.postMessage(this.contactForm.value).subscribe(
				async () => {
					this.toast.success(
						await this.translate.get('messageSend').toPromise(),
						(await this.translate.get('thanksFeedback').toPromise()) + ' !!!',
						{
							closeButton: true,
							progressBar: true,
							progressAnimation: 'decreasing',
						},
					);
					this.contactForm.reset();
				},
				async () => {
					this.toast.error(
						await this.translate.get('errorOccured').toPromise(),
						undefined,
						{
							closeButton: true,
							progressBar: true,
							progressAnimation: 'decreasing',
						},
					);
					this.contactForm.reset();
				},
			);
		} else {
			this.toast.warning(
				await this.translate.get('invalidFormMessage').toPromise(),
				undefined,
				{
					closeButton: true,
					progressBar: true,
					progressAnimation: 'decreasing',
				},
			);
		}
	}
}
