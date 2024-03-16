import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { GuestsService } from '../../../services/guests.service';
import 'aos/dist/aos.css';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConstantsService } from '../../../services/helpers/constants.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    guestsService   = inject(GuestsService);
    ngModalService  = inject(NgbModal);
    constantsService = inject(ConstantsService);

    @ViewChild('finishModal', { static: true }) finishModal!: ElementRef;
    @ViewChild('errorModal', { static: true }) errorModal!: ElementRef;

    guests: string = '';
    escorts: number = 0;

    showSection1 = true;
    showSection2 = false;
    showSection3 = false;
    showSection4 = false;

    activeSection = 1;

    errorTextWhatsApp = `Olá%20${this.constantsService.eventManager},%20estou%20com%20problemas%20para%20confirmar%20minha%20presença.`;

    spinnerLoad: boolean = false;

    ngOnInit(): void {
        
    }

    showSection(sectionNumber: number) {
        this.activeSection = sectionNumber;
        this.showSection1 = sectionNumber === 1;
        this.showSection2 = sectionNumber === 2;
        this.showSection3 = sectionNumber === 3;
        this.showSection4 = sectionNumber === 4;
    }

    addEscorts() {
        this.escorts += 1;
    }

    removeEscorts() {
        this.escorts -= 1;
    
        if(this.escorts <= 1) {
            this.escorts = 0
        }
    }

    insertGuests() {
        if(this.escorts < 0) {
            return;
        }

        const guests = {
            id: 0,
            name: this.guests,
            escorts: this.escorts,
            createdAt: '',
            updatedAt: ''
        }

        this.spinnerLoad = true;
        this.guestsService.newGuests(guests).subscribe((response) => {
            this.spinnerLoad = false;
            this.ngModalService.open(this.finishModal, {centered: true});
            this.showSection(1);
        }, (error) => {
            this.spinnerLoad = false;
            this.ngModalService.open(this.errorModal, {centered: true});
            console.log("Error:", error);
        })
    }

    cleanGuests() {
        this.guests = '';
        this.escorts = 0
    }
}
