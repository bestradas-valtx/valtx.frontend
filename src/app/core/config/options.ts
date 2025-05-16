export const ROWS_DEFAULT_REPORT = 1000;
export const ROWS_DEFAULT = 5;
export const ROWS_OPTIONS = [5,10, 25, 50];

export const TIME_RETURN_TRAY = 3000;

export enum PARAMS_AUXILIAR {
    ESTADO = '1',
    TIPO_DOCUMENTO ='2',
    TIPO_BANCO = '3',
    TIPO_MONEDA = '4',
    TIPO_CUESTIONARIO_GENERAL = '5',
    TIPO_CUESTONARIO_RESPONSABILIDAD = '6',
    TIPO_CARGO = '7',
    TIPO_AREA = '8',
    TIPO_EMPRESA= '9',
    NOMBRE_BANCO= '10',
    TIPO_TRABAJO = '11',
    CONDICION_PAGO= '12',
    TIPO_INVITACION= '13',
    TIPO_PREGUNTA_CUESTONARIO_SSOMA= '14',
    TIPO_ESTADO_PREGUNTA= '15',    
    TIPO_ESTADO_PROVEEDOR= '16',
    TIPO_ESTADO_HOMOLOGACION= '17',
    TIPO_INCIDENCIA= '18' 

}

export const MESSAGE_EMPTY ="No se encontrarón Resultados";
export const MAX_LENGTH_FILES =  60 ;

export const INFO_ACTUALIZADA_EDITADA ="No se encontrarón Resultados";

export const opcionesDeFormatoFecha: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit', 
};

export const  NOMBRES_PLANTILLAS_EXCEL ={
    BANDEJA_PROVEEDOR : 'Bandeja_Proveedor',
    REPORTE_PROVEEDOR : 'Reporte_Proveedor',
    REPORTE_ACTIVIDAD : 'Reporte_Actvidad',
    REPORTE_INCIDENCIA: 'Reporte_Incidencia',
};

export enum Perfiles{
    Admin =1,
    Perfil_Consulta = 2,
    Proveedor = 3,
    Analista_Adm_Finanzas=4,
    Analista_SSOMA= 5
}

export enum TipoCuentaBancaria{
    Normal = 1,
    Detraccion =2  
}

export enum EstadoPreguntas{
    Registrado =1,
    En_Revision = 2,
    Observado = 3,
    Aprobado=4,
}

export const VALUE_MILLIONS = 1000000;