import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {
  submenus = [
    {
      title: 'Responsibility',
      subitems: [
        'managing risk',
        'underwriting criteria',
        'credit & compliance'
      ]
    },
    {
      title: 'Transparency',
      subitems: [
        'our statistics',
        'the reserve fund',
        'independent stress test'
      ]
    },
    {
      title: 'Intelligence',
      subitems: [
        'landbay Blog',
        'report & white papers',
        'landbay rental index'
      ]
    },
    {
      title: 'Legal',
      subitems: [
        'terms & conditions',
        'cookie policy',
        'privacy policy',
        'complaints procedure'
      ]
    },
    {
      title: 'Help Centre',
      subitems: ['FAQs', 'contact us', 'promotions & offers', 'sitemap']
    }
  ];
}
