import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [], // ตรวจสอบว่าคุณได้ Import Standalone Component หรือ Module ที่จำเป็นที่นี่
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id = input<number>();
  name = input<string>();
  salary = input<string>();
  @Output() onDelete = new EventEmitter<number>();

  deleteItem(){
    if(confirm(`คุณต้องการลบข้อมูลรหัส ${this.id()} หรือไม่?`)){
      this.onDelete.emit(this.id());
    }
  }
}