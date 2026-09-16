export interface Bus {
  id: number;
  ruta: string;
  posicion: number;
  intervalo: number;
}

export const initialBuses: Bus[] = [
  {
    id: 214,
    ruta: 'R07',
    posicion: 20,
    intervalo: 1.5
  },
  {
    id: 215,
    ruta: 'R07',
    posicion: 24,
    intervalo: 2
  },
  {
    id: 216,
    ruta: 'R07',
    posicion: 45,
    intervalo: 8
  },
  {
    id: 101,
    ruta: 'R03',
    posicion: 15,
    intervalo: 6
  },
  {
    id: 102,
    ruta: 'R03',
    posicion: 35,
    intervalo: 7
  },
  {
    id: 103,
    ruta: 'R03',
    posicion: 70,
    intervalo: 20
  },
  {
    id: 301,
    ruta: 'R12',
    posicion: 10,
    intervalo: 5
  },
  {
    id: 302,
    ruta: 'R12',
    posicion: 42,
    intervalo: 7
  }
];