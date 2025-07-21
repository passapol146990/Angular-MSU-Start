import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppdataService, Member } from '../../service/appdata';

@Component({
  selector: 'app-member',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './member.html',
  styleUrl: './member.scss'
})
export class MemberPage {
  appData = new AppdataService();
  constructor(private router: Router) { }
  changePage1() {
    this.router.navigateByUrl('/member/list');
  }
  changePage2() {
    this.router.navigateByUrl('/member/profile');
  }
  sendParams() {
    this.router.navigate(['/member/test'], {
      queryParams: { name: 'passapol sutatam' },
    });
  }

  addMember() {
    let member = new Member();
    member.id = Math.random();
    member.fullname = "Test Fullname";
    member.image = "test img";
    this.appData.members.push(member);
    console.log(this.appData.members);
  }
  addMemberSession() {
    let members = [];
    if (sessionStorage.getItem('members')) {
      members = JSON.parse(sessionStorage.getItem('members')!);
    }
    let member = new Member();
    member.id = Math.random();
    member.fullname = 'Test Fullname';
    member.image = 'Test Image';
    members.push(member);
    sessionStorage.setItem('members', JSON.stringify(members));

    console.log(sessionStorage.getItem('members'));
  }

  addMemberLocalStorage() {
    let members = [];
    if (localStorage.getItem('members')) {
      members = JSON.parse(localStorage.getItem('members')!);
    }
    let member = new Member();
    member.id = Math.random();
    member.fullname = 'Test Fullname';
    member.image = 'Test Image';
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));

    console.log(localStorage.getItem('members'));
  }
}
