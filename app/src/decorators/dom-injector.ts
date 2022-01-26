export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {

        console.log(`Modificando prototype ${target.constructor.name}
        e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do dom com o ${seletor} para injetar em 
            ${propertyKey}`);
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
            );
    }
}
