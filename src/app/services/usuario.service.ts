import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BancoService } from './banco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BancoService {

  // public inserirCadastro(usuario) {
  //   return this.getDB().then((db:SQLiteObject) => {
  //     db.executeSql("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [usuario.nome, usuario.email, usuario.senha]);
  //   });
  // }

  public cadastrar(nome:string, email:string, senha:string) {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha]);
    });
  }

  public logar(email:string, senha:string): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT email FROM usuarios WHERE email = ? AND senha = ?", [email, senha]).then(resultado => { 
        return (resultado.rows.length > 0);
      });
    });
  }

}
