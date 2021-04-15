export interface MedicalHistoryInterface {

    id?: string;

    nombre: string;
    edad: string;
    sexo: string;
    fechaNacimiento: Date;
    lugarNacimiento: string;
    edadMeses: string;
    escolaridad: string;
    religion: string;
    nacionalidad: string;
    etnia: string;
    documentoIdentidad: string;
    eps: string;
    ips: string;
    sisben: string;
    estrato: string;
    direccion: string;
    comuna: string;
    barrio: string;
    vereda: string;
    telefonoFijo: string;
    celular: string;
    

    
    nombreInformante: string;
    parentesco_afinidad: string;
    edadinformante: string;
    escolaridadinformante: string;
    religioninformante: string;
    direccioninformante: string;
    comunainformante: string;
    barrioinformante: string;
    veredainformante: string;
    telefonoFijoinformante: string;
    celularinformante: string;
    confiabilidad: string;
    

    motidoConsulta: string;
    enfermedadActual: string;
    diagnosticosPrevios: string;
    paraclinicosDiagnosticados: string;
    terapeuticaPrevia: string;



    edadMadreParto: string;
    numeroEmbarazo: string;
    embarazoNormal: string;
    causa: string;
    asistenciaControlPrenatal: string;
    numeroControlesPrenatales: string;
    edadGestacionalControlPrenatal: string;
    vdrl: string;
    fechaResultadoVdrl: Date;
    resultadoVdrl: string;
    elisa_vih: string;
    fechaResultadoVih: Date;
    resultadoVih: string;
    vacunacionMaterna: string;
    fechaVacunacionMaterna: string;
    consumoSustanciasEmbarazo: string;
    tipoEmbarazo: string;
    parto_puerperio: string;
    partoEutocico: string;
    caracteristicasParto: string;
    razonCarasteristicasParto: string;
    anestesia: string;
    tipoAnestesia: string;
    edadGestacionalAlNacer: string;
    menor_mayorsemanas: string;
    hemoclasificacionMadre: string;
    hemoclasificacionRn: string;
    rupturaPrematuraMenbranas: string;
    horaRuptura: string;
    pesoRecienNacido: string;
    talla: string;
    pc: string;
    pt: string;
    apgar: string;
    deprimido_reanimacion_tsh: string;
    otros: string;
    lugarAtencionParto: string;
    cuidadoIntensivoNeonatal: string;
    porqueCuidadoIntensivo: string;
    ventilacionMecanica: string;
    tiempoVentilacionMecanica: string;
    asistenciaProgramaCanguro: string;
    profilaxisVsr: string;
    numeroDosisProfilaxisVsr: string;

    patologias: string;
    especificar: string;
    egresorn: string;
    informacionAdicional: string;

    vacunacion: string;


    quirurgico: string;
    hospitalizacion: string;
    alergicos: string;
    enfermedadesInfectocontagiosas: string;
    traumaticos: string;
    antecedentesTransfuncionales: string;
    antecedentesUsoMedicamentos: string;
    sustancias: string;
    acupuntura_tatuaje: string;
    otrasPatologias: string;


    menarca: string;
    fum: string;
    ciclo: string;
    ritmo: string;
    dismenorrea: string;
    g: string;
    p: string;
    a: string;
    c: string;
    ivsa: string;
    metodosControl: string;


    estadoNutricional: string;
    gananciaPeso: string;
    velocidadCrecimiento: string;
    observacionesCrecimiento: string;


    seguirObajetos: string;
    sostuvoCabeza: string;
    volteo: string;
    palmaAbierta_agarreObjetos: string;
    pinzaDosDedos: string;
    pinzaTresDedos: string;
    sonreir: string;
    seSentoSolo: string;
    gatear: string;
    marchaSinApoyo: string;
    reconoceLosPadres: string;
    reconocerOtrasPersonas: string;
    juegosOtrosninos: string;
    primerosTrazos: string;
    dibujoHumanos: string;
    silabeo: string;
    palabraFrase: string;
    lenguajeFluido: string;


    alteracionLenguaje: string;
    alteracionDesarrollo: string;
    asistenciaControlDesarrollo: string;
    numeroControlesAños: string;
    cualAlteracionLenguaje: string;
    cualAlteraciondesarrollo: string;
    observaciones_alteracion: string;


    lactanciaMaternaExclusiva: string;
    duracion: string;
    respuestaNo: string;
    edadDestete: string;
    nuevaAlimentacion: string;
    nuevaAlimentacionAdecuada: string;
    porque: string;
    tipoFormulaLactea: string;
    preparacionAdecuada: string;
    cantidadSuministrada: string;
    edadInicioFormulaLactea: string;
    alimentacionActual: string;
    observacionesAlimentacion: string;


    problemasAlimentacion: string;
    cualProblemaAlimentacion: string;
    habitosDeSueño: string;
    horasDeSueño: string;
    dificultadesSueño: string;
    cualDificultadSueño: string;
    edadControlEsfinterVesical: string;
    edadControlEsfinterAnal: string;
    Observaciones: string;


    personasConvivenMenorTotal: string;
    personasConvivenMenorAdultos: string;
    personasConvivenMenorNiños: string;
    personasConvivenMenorMadre: string;
    personasConvivenMenorPadre: string;
    personasConvivenMenorHermanos: string;
    personasConvivenMenorAbuelos: string;
    personasConvivenMenorTios: string;
    personasConvivenMenorMadrastra: string;
    personasConvivenMenorPadrastro: string;
    personasConvivenMenorOtros: string;
    cuidadorPaciente: string;
    nombreMadre: string;
    viveMadre: string;
    edadMadre: string;
    escolaridadMadre: string;
    etniaMadre: string;
    direccionMadre: string;
    telefonoMadre: string;
    primariaCompletaMadre: string;
    secundariaCompletaMadre: string;
    tecnologicaCompletaMadre: string;
    estudiosSuperioresMadre: string;
    educacionNoFormalMadre: string;
    analfabetismoMadre: string;
    trabajoMadre: string;
    trabajoFormalMadre: string;
    trabajoInformalMadre: string;
    profesionMadre: string;
    ocupacionMadre: string;
    salarioMensualMadre: string;
    gestaciones: string;
    partos: string;
    partosVaginal: string;
    partosCesarea: string;
    abortos: string;
    mortinados: string;
    nacidosVivos: string;
    transfusionesMadre: string;
    tatuajesMadre: string;
    acupunturaMadre: string;
    toxicomaniasMadre: string;
    estadoDeSaludMadre: string;
    nombrePadre: string;
    vivePadre: string;
    edadPadre: string;
    escolaridadPadre: string;
    direccionPadre: string;
    telefonoPadre: string;
    primariaCompletaPadre: string;
    secundariaCompletaPadre: string;
    tecnologicaCompletaPadre: string;
    estudiosSuperioresPadre: string;
    educacionNoFormalPadre: string;
    analfabetismoPadre: string;
    trabajoPadre: string;
    trabajoFormalPadre: string;
    trabajoInformalPadre: string;
    profesionPadre: string;
    ocupacionPadre: string;
    salarioMensualPadre: string;
    transfusionesPadre: string;
    tatuajesPadre: string;
    acupunturaPadre: string;
    toxicomaniasPadre: string;
    estadoDeSaludPadre: string;
    hermanos: string;
    hermanosVivos: string;
    hermanosMuertos: string;
    edadesHermanos: string;
    hermanosSanos: string;
    hermanosEnfermos: string;
    observacionesHermanos: string;


    vivienda: string;
    hacimiento: string;
    deficitVivienda: string;
    piso: string;
    paredes: string;
    serviciosPublicos: string;
    electricidad: string;
    gas: string;
    suministroAgua: string;
    otra: string;
    fuenteEnergia: string;
    alcantarillado: string;
    otroAlcantarillado: string;
    baño: string;
    basuras: string;
    otroBasuras:string;
    observacionesVivienda: string;
    numeroHabitaciones: string;
    personasPorHabitacion: string;
    colecho: string;
    fumadores: string;
    percepcionRedApoyoFamiliar: string;
    presenciaMascoatas: string;
    numeroMascotas: string;
    cual: string;
    refrigerador: string;
    telefono: string;
    automovil: string;
    exposicionSustanciasToxicas: string;
    cualesSustanciasToxicas: string;
    riesgoSocial: string;
    tipoRiesgoSocial: string;
    asistenciaJardinInfantil: string;
    edadInicio: string;
    escolarizado: string;
    rendimientoEscolarAdecuado: string;
    gradoEscolaridad: string;
    formasCastigo: string;
    conflictosRelevantes: string;
    

    cabeza_cara_cuello: string;
    sistemacardiovascular: string;
    sistemaRespiratorio: string;
    sistemaGastrointestinal: string;
    sistemagenito_urinarios: string;
    sistemaOsteomuscular: string;
    piel_faneras: string;
    sistemaNeurologico: string;


    aparienciaGeneral: string;
    fc: string;
    fr: string;
    temperatura: string;
    ta: string;
    glucometria: string;
    oximetria: string;
    antropometria: string;
    perimetrocefalico: string;
    perimetroToracico: string;
    peso: string;
    tall: string;
    imc: string;
    peso_tallaPuntajeZ: string;
    talla_edadPuntajeZ: string;
    peso_edad_imePuntajeZ: string;
    cabeza: string;
    observacionCabeza: string;
    ojos: string;
    observacionOjos: string;
    nariz: string;
    observacionNariz: string;
    boca: string;
    observacionBoca: string;
    oidos: string;
    observacionOidos: string; 
    cuello: string;
    observacionCuello: string;
    pulmonar: string;
    observacionPulmonar: string;
    cardiovascular: string;
    observacionCardiovascular: string;
    abdomen: string;
    observacionAbdomen: string;
    genitourinario: string;
    observacionGenitourinario: string;
    extremidades: string;
    observacionExtremidades: string;
    pielYAnexos: string;
    observacionPielYAnexos: string;
    neurodesarrollo: string;
    observacionNeurodesarrollo: string;
    analisis: string;
    

    diagnosticospatologicos: string;
    diagnosticoNutricional: string;
    diagnosticoNeurodesarrollo: string;
    diagnosticoRiesgoSocial: string;
    propuestaTerapeutica: string;
    solicitudAyudasDiagnosticas: string;
    recomendaciones: string;


    fechaProximaConsulta: Date;
    nombreYFirmaMedico: string;

}
