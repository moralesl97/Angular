interface ICuenta {
    deposito(deposito:number):void;
    retiro(retiro:number):void;
    consultarSaldo():void;

}

class CuentaPersonal implements ICuenta{
    constructor(private saldo:number){
    }
    deposito(deposito:number){
        this.saldo += deposito;
    }
    retiro(retiro:number){
        this.saldo -= retiro;
    }
    consultarSaldo(){
        console.log(this.saldo);
    }
}

class CuentaEmpresarial implements ICuenta{
    constructor(private saldo:number){
        this.saldo = saldo;
    }
    deposito(deposito:number){
        this.saldo += deposito;
    }
    retiro(retiro:number){
        this.saldo -= retiro;
    }
    consultarSaldo(){
        console.log(this.saldo);
    }
}

interface ICuentaCredito extends ICuenta {
    calculaIntereses():number;
}

class TarjetaCredito implements ICuentaCredito{
    constructor(private credito:number){
        this.credito = credito;
    }
    deposito(deposito:number){
        this.credito += deposito;
    }
    retiro(retiro:number){
        this.credito -= retiro;
    }
    consultarSaldo(){
        console.log(this.credito);
    }
    calculaIntereses(){
        if(this.credito > 0)
        {  
            return this.credito * .15;
        }
        else{
            return 0;
        }
    }   
}