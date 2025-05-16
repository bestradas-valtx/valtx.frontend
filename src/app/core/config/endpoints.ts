import { environment } from "src/environments/environment"

const URLBASE = environment.UrlBase;

export const Endpoints = {
  LOGIN: '/seguridad/auth/login',
  GENERA_CODIGO: '/seguridad/genera_codigo',
  PASS_RECOVER: '/seguridad/setUsuarioResetPassword',
  GET_SUBMENU: '/Opcion/GetSubMenu',


  /* CUESTIONARIOS SSOMA TRANSVERSAL */
  GET_CUESTIONARIO_SSOMA_TRANSVERSAL:"/cuestionario/getCuestionarioSomaTransversalList",
  SET_CUESTIONARIO_SSOMA_TRANSVERSAL:"/cuestionario/setCuestionarioSomaTransversal",
  SET_CUESTIONARIO_SSOMA_DETALLE_TRANSVERSAL:"/cuestionario/setCuestionarioSomaDetalleTransversal",
  GET_CUESTIONARIO_SSOMA_TRANSVERSAL_ID:"/cuestionario/getCuestionarioSomaTransversalId",

  
  DEL_CUESTIONARIO_SSOMA_TRANSVERSAL:"/cuestionario/delCuestionarioSomaTransversalId?iid_cuestionario_soma=",
  DEL_CUESTIONARIO_SSOMA_TRANSVERSAL_DETALLE_ID:"/cuestionario/delCuestionarioSomaDetalleTransversalId?iid_cuestionario_soma_detalle=",


  //PREGUNTAS TRANSVERSALES
  GET_PROVEEDOR_SSOMA_TRANSVERSAL_ID:"/proveedor/getProveedorCuestionarioSomaTransversalId?iid_proveedor=",
  ACTUALIZAR_ESTADO_PREGUNTA_SSOMA_TRANSVERSAL:"/proveedor/setCambiarEstadoPreguntaSSOMADetalleTransversal",

  
  ACTUALIZAR_ESTADO_PREGUNTA_SSOMA :"/proveedor/setCambiarEstadoPreguntaSSOMADetalle",
  ACTUALIZAR_MASIVO_SSOMA :"/proveedor/setCambioEstadoMasivoPreguntasSSOMADetalleTransversal",

}
