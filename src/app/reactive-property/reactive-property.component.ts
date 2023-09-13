import { Component, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-property',
  templateUrl: './reactive-property.component.html',
  styleUrls: ['./reactive-property.component.scss'],
})
export class ReactivePropertyComponent {
  employeeForm!: FormGroup;
  firstName = signal<string>('Prafull');
  lastName = signal<string>('Patil');
  qty = signal<number>(0);
  employees = signal([
    { name: 'Test 1', position: 'Manager', department: 'Sales' },
    { name: 'Test 2', position: 'Engineer', department: 'Development' },
    { name: 'Test 3', position: 'Marketing Specialist', department: 'Marketing' },
    { name: 'Test 4', position: 'HR Manager', department: 'Human Resources' },
    { name: 'Test 5', position: 'IT Support', department: 'IT' }
  ]);

  empAdding= signal<boolean>(false);
  fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  changeFirstName(fname: string) {
    this.firstName.set(fname);
  }

  changeLastName(lname: string) {
    this.firstName.set(lname);
  }

  onDecreaseQty(){
    this.qty.update(qty => qty-1);
  }

  onIncreaseQty(){
    this.qty.update(qty => qty+1);
  }

  onSubmit() {
    this.employees.mutate(emplist=>{
      emplist.push(this.employeeForm.value);
    });
  }

  product = signal({
    name: 'Laptop',
    category: 'Electronics',
    price: 2000,
    rating: 4.5,
  });

  changeProductName(){
    this.product.mutate(product => product.name = 'Mobile');
  }
  
  sideEffect = effect(()=> this.saveProductDatatoAPI(this.product()))

  saveProductDatatoAPI(product:any){
    console.log('Call Api with product Data: '+ JSON.stringify(product));
  }

  toggleAddBlock(){
    this.empAdding.update(status => !status);
  }
}

