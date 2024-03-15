import { Component, OnInit, inject } from '@angular/core';
import { GuestsService } from '../../../services/guests.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    guestsService = inject(GuestsService);

    showSection1 = true;
    showSection2 = false;
    showSection3 = false;
    showSection4 = false;

    activeSection = 1;

    ngOnInit(): void {
        AOS.init();
    }

    showSection(sectionNumber: number) {
        this.activeSection = sectionNumber;
        this.showSection1 = sectionNumber === 1;
        this.showSection2 = sectionNumber === 2;
        this.showSection3 = sectionNumber === 3;
        this.showSection4 = sectionNumber === 4;
    }
}
