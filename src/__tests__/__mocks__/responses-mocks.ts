import { SIGNATURE_AUTHOR } from '../../constants/author-signature'
import { IInternalSearchResponse } from '../../interfaces/IInternalSearchResponse'
import { IInternalItemResponse } from '../../interfaces/IInternalItemResponse'

export const InternalSearchResponse: IInternalSearchResponse = {
  author: SIGNATURE_AUTHOR,
  items: [
    {
      id: 'MLA835773010',
      title: 'Pc Armada Slim Intel Amd Dual Core Hd 1tb 8gb Ram Lol Hdmi',
      price: { currency: 'ARS', amount: 42999, decimals: 0 },
      picture: 'http://http2.mlstatic.com/D_991401-MLA31351342525_072019-I.jpg',
      condition: 'new',
      free_shipping: true,
      seller_address: 'Capital Federal',
    },
    {
      id: 'MLA610585210',
      title: 'Pc Armada  Dual Core 4 Gigas Ram Hd 320g Kit Soft',
      price: { currency: 'ARS', amount: 16499, decimals: 0 },
      picture: 'http://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg',
      condition: 'new',
      free_shipping: true,
      seller_address: 'Capital Federal',
    },
    {
      id: 'MLA782273275',
      title: 'Pc Ar Dual Core 4 Gigas Ram Hd 320g Kit Gab( Oulet) Soft',
      price: { currency: 'ARS', amount: 14799, decimals: 0 },
      picture: 'http://http2.mlstatic.com/D_825380-MLA31145219218_062019-I.jpg',
      condition: 'new',
      free_shipping: true,
      seller_address: 'Capital Federal',
    },
    {
      id: 'MLA877976152',
      title: 'Pc Armada Completa Amd A6-7480 3.8ghz Ssd 120gb 4gb Win 10',
      price: { currency: 'ARS', amount: 25999, decimals: 0 },
      picture: 'http://http2.mlstatic.com/D_705213-MLA43430007541_092020-I.jpg',
      condition: 'new',
      free_shipping: true,
      seller_address: 'Capital Federal',
    },
  ],
  categories: [
    { id: 'MLA1648', name: 'Computación' },
    { id: 'MLA430637', name: 'PC de Escritorio' },
    { id: 'MLA1649', name: 'PC' },
  ],
}

export const InternalItemResponse: IInternalItemResponse = {
  author: SIGNATURE_AUTHOR,
  item: {
    id: 'MLA835773010',
    condition: 'new',
    description:
      'CÓMO COMPRAR EN NUESTRA TIENDA OFICIAL:\n' +
      '1. Selecciona la cantidad que deseas adquirir y hacé Click en comprar. \n' +
      '*Verificá la cantidad máxima disponible al principio de esta publicación.\n' +
      '2. Gestioná el Envío: cargá la dirección completa del domicilio donde querés recibir tu compra. \n' +
      '3. Elegí la forma de pago: contamos con todos los métodos que ofrece Mercado Pago. \n' +
      '\n' +
      '¿FACTURAS?\n' +
      'Realizamos Factura A y B electronica.\n' +
      '\n' +
      '¿CÓMO SE SI HAY DISPONIBILIDAD DEL PRODUCTO?\n' +
      'Realiza tu pregunta las 24hs los 365 días del año y en minutos te confirmaremos.\n' +
      '\n' +
      '¿CÓMO SABER CUÁNDO LLEGA? \n' +
      'Tu pedido será despachado por correo mediante MercadoEnvíos; y a las 48 hs hábiles de acreditado el pago recibirás un código de seguimiento para saber dónde se encuentra la mercadería.\n' +
      '\n' +
      '¿CUÁNTO CUESTA EL ENVÍO Y CUÁNTO TARDA? \n' +
      'El tiempo de envío depende del domicilio de entrega. \n' +
      'El costo es gratuito!\n' +
      '¡Hacemos envíos a todo el país!\n' +
      '\n' +
      '¿LOS PRODUCTOS SON ORIGINALES? \n' +
      'Sí, estás comprando en la Tienda Oficial de 4KRC SA. Los productos son 100% originales.\n' +
      '\n' +
      'Soy el titular de la cuenta de mercadolibre ¿Que debo llevar al momento del retiro?\n' +
      'Si sos el titular sólo debes traer tu DNI.\n' +
      '\n' +
      '¿Puede retirar otra persona que no sea el titular?\n' +
      'Si, debe tener una autorizacion escrita o por mensaje privado de mercadolibre (EXCLUYENTE) y acreditar identidad con DNI.\n' +
      '\n' +
      '¡Gracias por confiar en nosotros!\n' +
      'TIENDA OFICIAL 4KRC SA',
    free_shipping: true,
    picture: 'https://http2.mlstatic.com/D_991401-MLA31351342525_072019-O.jpg',
    price: { currency: 'ARS', amount: 42999, decimals: 0 },
    sold_quantity: 500,
    title: 'Pc Armada Slim Intel Amd Dual Core Hd 1tb 8gb Ram Lol Hdmi',
    path_from_root: [
      { id: 'MLA1648', name: 'Computación' },
      { id: 'MLA430637', name: 'PC de Escritorio' },
      { id: 'MLA1649', name: 'PC' },
    ],
  },
}
