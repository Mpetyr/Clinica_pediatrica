import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/pages/patients/patient.service';

@Component({
  selector: 'app-new-medical-history2',
  templateUrl: './new-medical-history2.component.html',
  styleUrls: ['./new-medical-history2.component.css']
})
export class NewMedicalHistory2Component {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      lugarNacimiento: new FormControl('', [Validators.required]),
      edadMeses: new FormControl('', [Validators.required]),
      escolaridad: new FormControl('', [Validators.required]),
      religion: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      etnia: new FormControl('', [Validators.required]),
      documentoIdentidad: new FormControl('', [Validators.required]),
      eps: new FormControl('', [Validators.required]),
      ips: new FormControl('', [Validators.required]),
      sisben: new FormControl('', [Validators.required]),
      estrato: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      comuna: new FormControl('', [Validators.required]),
      barrio: new FormControl('', [Validators.required]),
      vereda: new FormControl('', [Validators.required]),
      telefonoFijo: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),


      nombreInformante: new FormControl('', [Validators.required]),
      pantesco_afinidad: new FormControl('', [Validators.required]),
      confiabilidad: new FormControl('', [Validators.required]),


      motidoConsulta: new FormControl('', [Validators.required]),
      enfermedadActual: new FormControl('', [Validators.required]),
      diagnosticosPrevios: new FormControl('', [Validators.required]),
      paraclinicosDiagnosticados: new FormControl('', [Validators.required]),
      terapeuticaPrevia: new FormControl('', [Validators.required]),


      edadMadreParto: new FormControl('', [Validators.required]),
      numeroEmbarazo: new FormControl('', [Validators.required]),
      embarazoNormal: new FormControl('', [Validators.required]),
      asistenciaControlPrenatal: new FormControl('', [Validators.required]),
      numeroControlesPrenatales: new FormControl('', [Validators.required]),
      edadGestacionalControlPrenatal: new FormControl('', [Validators.required]),
      vdrl: new FormControl('', [Validators.required]),
      fecha_resultado: new FormControl('', [Validators.required]),
      elisa_vih: new FormControl('', [Validators.required]),
      vacunacionMaterna: new FormControl('', [Validators.required]),
      consumoSustanciasEmbarazo: new FormControl('', [Validators.required]),
      tipoEmbarazo: new FormControl('', [Validators.required]),
      parto_puerperio: new FormControl('', [Validators.required]),
      partoEutocico: new FormControl('', [Validators.required]),
      caracteristicasParto: new FormControl('', [Validators.required]),
      razonCarasteristicasParto: new FormControl('', [Validators.required]),
      anestesia: new FormControl('', [Validators.required]),
      tipoAnestesia: new FormControl('', [Validators.required]),
      edadGestacionalAlNacer: new FormControl('', [Validators.required]),
      menor_mayorsemanas: new FormControl('', [Validators.required]),
      hemoclasificacionMadre: new FormControl('', [Validators.required]),
      hemoclasificacionRn: new FormControl('', [Validators.required]),
      rupturaPrematuraMenbranas: new FormControl('', [Validators.required]),
      horaRuptura: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      talla: new FormControl('', [Validators.required]),
      pc: new FormControl('', [Validators.required]),
      pt: new FormControl('', [Validators.required]),
      apgar: new FormControl('', [Validators.required]),
      deprimido_reanimacion_tsh: new FormControl('', [Validators.required]),
      otros: new FormControl(''),
      lugarAtencionParto: new FormControl('', [Validators.required]),
      cuidadoIntensivoNeonatal: new FormControl('', [Validators.required]),
      porque: new FormControl(''),
      ventilacionMecanica: new FormControl('', [Validators.required]),
      tiempoVentilacionMecanica: new FormControl('', [Validators.required]),
      asistenciaProgramaCanguro: new FormControl('', [Validators.required]),
      profilaxisVsr: new FormControl('', [Validators.required]),
      numeroDosisProfilaxisVsr: new FormControl('', [Validators.required]),


      patologias: new FormControl(''),
      egresorn: new FormControl('', [Validators.required]),
      informacionAdicional: new FormControl(''),


      quirurgico: new FormControl('', [Validators.required]),
      hospitalizacion: new FormControl('', [Validators.required]),
      alergicos: new FormControl('', [Validators.required]),
      enfermedadesInfectocontagiosas: new FormControl('', [Validators.required]),
      traumaticos: new FormControl('', [Validators.required]),
      antecedentesTransfuncionales: new FormControl('', [Validators.required]),
      antecedentesUsoMedicamentos: new FormControl('', [Validators.required]),
      sustancias: new FormControl('', [Validators.required]),
      acupuntura_tatuaje: new FormControl('', [Validators.required]),
      otrasPatologias: new FormControl('', [Validators.required]),


      menarca: new FormControl('', [Validators.required]),
      fum: new FormControl('', [Validators.required]),
      ciclo: new FormControl('', [Validators.required]),
      ritmo: new FormControl('', [Validators.required]),
      dismenorrea: new FormControl('', [Validators.required]),
      g: new FormControl('', [Validators.required]),
      p: new FormControl('', [Validators.required]),
      a: new FormControl('', [Validators.required]),
      c: new FormControl('', [Validators.required]),
      ivsa: new FormControl('', [Validators.required]),
      metodosControl: new FormControl('', [Validators.required]),


      estadoNutricional: new FormControl('', [Validators.required]),
      gananciaPeso: new FormControl('', [Validators.required]),
      velocidadCrecimiento: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),


      seguirObajetos: new FormControl('', [Validators.required]),
      sostuvoCabeza: new FormControl('', [Validators.required]),
      volteo: new FormControl('', [Validators.required]),
      palmaAbierta_agarreObjetos: new FormControl('', [Validators.required]),
      pinzaDosDedos: new FormControl('', [Validators.required]),
      pinzaTresDedos: new FormControl('', [Validators.required]),
      sonreir: new FormControl('', [Validators.required]),
      seSentoSolo: new FormControl('', [Validators.required]),
      gatear: new FormControl('', [Validators.required]),
      marchaSinApoyo: new FormControl('', [Validators.required]),
      reconoceLosPadres: new FormControl('', [Validators.required]),
      reconocerOtrasPersonas: new FormControl('', [Validators.required]),
      juegosOtrosninos: new FormControl('', [Validators.required]),
      primerosTrazos: new FormControl('', [Validators.required]),
      dibujoHumanos: new FormControl('', [Validators.required]),
      silabeo: new FormControl('', [Validators.required]),
      palabraFrase: new FormControl('', [Validators.required]),
      lenguajeFluido: new FormControl('', [Validators.required]),

      //Revisar
      alteracionLenguaje: new FormControl('', [Validators.required]),
      alteracionDesarrollo: new FormControl('', [Validators.required]),
      asistenciaControlDesarrollo: new FormControl('', [Validators.required]),
      numeroControlesAños: new FormControl('', [Validators.required]),
      cual: new FormControl(''),


      lactanciaMaternaExclusiva: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      respuestaNo: new FormControl('', [Validators.required]),
      edadDestete: new FormControl('', [Validators.required]),
      nuevaAlimentacion: new FormControl('', [Validators.required]),
      nuevaAlimentacionAdecuada: new FormControl('', [Validators.required]),
      tipoFormulaLactea: new FormControl('', [Validators.required]),
      preparacionAdecuada: new FormControl('', [Validators.required]),
      cantidadSuministrada: new FormControl('', [Validators.required]),
      edadInicioFormulaLactea: new FormControl('', [Validators.required]),
      alimentacionActual: new FormControl(''),


      problemasAlimentacion: new FormControl('', [Validators.required]),
      habitosDeSueño: new FormControl('', [Validators.required]),
      horasDeSueño: new FormControl('', [Validators.required]),
      dificultadesSueño: new FormControl('', [Validators.required]),
      edadControlEsfinter: new FormControl('', [Validators.required]),
      Observaciones: new FormControl('', [Validators.required]),


      personasConvivenNiño: new FormControl('', [Validators.required]),
      madre: new FormControl('', [Validators.required]),
      padre: new FormControl('', [Validators.required]),
      cuidadorPaciente: new FormControl('', [Validators.required]),
      vive: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      primariaCompleta: new FormControl('', [Validators.required]),
      secundariaCompleta: new FormControl('', [Validators.required]),
      tecnologicaCompleta: new FormControl('', [Validators.required]),
      estudiosSuperiores: new FormControl('', [Validators.required]),
      educacionNoFormal: new FormControl('', [Validators.required]),
      analfabetismo: new FormControl('', [Validators.required]),
      trabajo: new FormControl('', [Validators.required]),
      trabajoFormal: new FormControl('', [Validators.required]),
      trabajoInformal: new FormControl('', [Validators.required]),
      profesion: new FormControl('', [Validators.required]),
      ocupacion: new FormControl('', [Validators.required]),
      salarioMensual: new FormControl('', [Validators.required]),
      gestaciones: new FormControl('', [Validators.required]),
      partos: new FormControl('', [Validators.required]),
      partosVaginal: new FormControl('', [Validators.required]),
      partosCesarea: new FormControl('', [Validators.required]),
      abortos: new FormControl('', [Validators.required]),
      mortinados: new FormControl('', [Validators.required]),
      nacidosVivos: new FormControl('', [Validators.required]),
      transfusiones: new FormControl('', [Validators.required]),
      tatuajes: new FormControl('', [Validators.required]),
      acupuntura: new FormControl('', [Validators.required]),
      toxicomanias: new FormControl('', [Validators.required]),
      estadoDeSalud: new FormControl('', [Validators.required]),
      hermanos: new FormControl('', [Validators.required]),
      hermanosVivos: new FormControl('', [Validators.required]),
      hermanosMuertos: new FormControl('', [Validators.required]),
      edadesHermanos: new FormControl('', [Validators.required]),
      hermanosSanos: new FormControl('', [Validators.required]),
      hermanosEnfermos: new FormControl('', [Validators.required]),


      vivienda: new FormControl('', [Validators.required]),
      piso: new FormControl('', [Validators.required]),
      paredes: new FormControl('', [Validators.required]),
      serviciosPublicos: new FormControl('', [Validators.required]),
      suministroAgua: new FormControl('', [Validators.required]),
      otra: new FormControl('', [Validators.required]),
      fuenteEnergia: new FormControl('', [Validators.required]),
      alcantarillado: new FormControl('', [Validators.required]),
      basuras: new FormControl('', [Validators.required]),
      numeroHabitaciones: new FormControl('', [Validators.required]),
      personasPorHabitacion: new FormControl('', [Validators.required]),
      colecho: new FormControl('', [Validators.required]),
      fumadores: new FormControl('', [Validators.required]),
      percepcionRedApoyoFamiliar: new FormControl('', [Validators.required]),
      presenciaMascoatas: new FormControl('', [Validators.required]),
      numeroMascotas: new FormControl('', [Validators.required]),
      refrigerador: new FormControl('', [Validators.required]),
      automovil: new FormControl('', [Validators.required]),
      exposicionSustanciasToxicas: new FormControl('', [Validators.required]),
      riesgoSocial: new FormControl('', [Validators.required]),
      asistenciaJardinInfantil: new FormControl('', [Validators.required]),
      edadInicio: new FormControl('', [Validators.required]),
      escolarizado: new FormControl('', [Validators.required]),
      rendimientoEscolarAdecuado: new FormControl('', [Validators.required]),
      gradoEscolaridad: new FormControl('', [Validators.required]),
      formasCastigo: new FormControl('', [Validators.required]),
      conflictosRelevantes: new FormControl('', [Validators.required]),


      cabeza_cara_cuello: new FormControl('', [Validators.required]),
      sistemacardiovascular: new FormControl('', [Validators.required]),
      sistemaRespiratorio: new FormControl('', [Validators.required]),
      sistemaGastrointestinal: new FormControl('', [Validators.required]),
      sistemagenito_urinarios: new FormControl('', [Validators.required]),
      sistemaOsteomuscular: new FormControl('', [Validators.required]),
      piel_faneras: new FormControl('', [Validators.required]),
      sistemaNeurologico: new FormControl('', [Validators.required]),

      aparienciaGeneral: new FormControl('', [Validators.required]),
      fc: new FormControl('', [Validators.required]),
      fr: new FormControl('', [Validators.required]),
      temperatura: new FormControl('', [Validators.required]),
      ta: new FormControl('', [Validators.required]),
      glucometria: new FormControl('', [Validators.required]),
      oximetria: new FormControl('', [Validators.required]),
      antropometria: new FormControl('', [Validators.required]),
      perimetrocefalico: new FormControl('', [Validators.required]),
      perimetroToracico: new FormControl('', [Validators.required]),
      tall: new FormControl('', [Validators.required]),
      imc: new FormControl('', [Validators.required]),
      peso_tallaPuntajeZ: new FormControl('', [Validators.required]),
      talla_edadPuntajeZ: new FormControl('', [Validators.required]),
      peso_edad_imePuntajeZ: new FormControl('', [Validators.required]),
      cabeza: new FormControl('', [Validators.required]),
      ojos: new FormControl('', [Validators.required]),
      nariz: new FormControl('', [Validators.required]),
      boca: new FormControl('', [Validators.required]),
      oidos: new FormControl('', [Validators.required]),
      cuello: new FormControl('', [Validators.required]),
      pulmonar: new FormControl('', [Validators.required]),
      cardiovascular: new FormControl('', [Validators.required]),
      abdomen: new FormControl('', [Validators.required]),
      genitourinario: new FormControl('', [Validators.required]),
      extremidades: new FormControl('', [Validators.required]),
      pielYAnexos: new FormControl('', [Validators.required]),
      neurodesarrollo: new FormControl('', [Validators.required]),
      analisis: new FormControl('', [Validators.required]),


      diagnosticospatologicos: new FormControl('', [Validators.required]),
      diagnosticoNutricional: new FormControl('', [Validators.required]),
      diagnosticoNeurodesarrollo: new FormControl('', [Validators.required]),
      diagnosticoRiesgoSocial: new FormControl('', [Validators.required]),
      propuestaTerapeutica: new FormControl('', [Validators.required]),
      solicitudAyudasDiagnosticas: new FormControl('', [Validators.required]),
      recomendaciones: new FormControl('', [Validators.required]),


      fechaProximaConsulta: new FormControl('', [Validators.required]),
      nombreYFirmaMedico: new FormControl('', [Validators.required]),
    });
  }



  historiaClinicaFormulario: FormGroup;

  constructor(private medicalHistory: PatientService) {
    this.historiaClinicaFormulario = this.createFormGroup();
  }


  onResetForm() {
    this.historiaClinicaFormulario.reset();
  }

  onSaveForm() {
    this.medicalHistory.saveHistory(this.historiaClinicaFormulario.value);
  }

}

