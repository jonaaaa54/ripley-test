type MessageFacfactory = {
  [key: string]: string;
};

const MESSAGE_FACTORY: MessageFacfactory = {
  'app.receiver.add.success': 'El receptor se ha agregado correctamente.',
  'app.receiver.add.error': 'Error al agregar el receptor. Re-intentar.',
  'app.receiver.rut.exist': 'El rut ya existe.',
  'app.receiver.rut.required': 'El rut es requerido.',
};

export function getMessage(key: string): string {
  return MESSAGE_FACTORY[key] || 'Error desconocido.';
};
