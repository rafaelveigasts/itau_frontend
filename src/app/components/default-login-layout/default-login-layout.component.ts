import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = 'Entrar';
  @Input() secondaryBtnText: string = 'Criar conta';
  @Input() primaryBtnDisabled: boolean = false;
  @Output('submit') onSubmit = new EventEmitter<void>();
  @Output('navigate') onNavigate = new EventEmitter<string>();

  submit() {
    this.onSubmit.emit();
  }

  navigate(route: string) {
    this.onNavigate.emit(route);
  }
}
