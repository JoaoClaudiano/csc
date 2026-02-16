// Banco de dados de estádios de futebol do Brasil
// Coordenadas aproximadas (formato [latitude, longitude])
const estadios = {
    // Ceará
    "Arena Castelão": [-3.806, -38.526],
    "Estádio Presidente Vargas": [-3.745, -38.537],
    
    // Fortaleza (outros times)
    "Estádio Alcides Santos": [-3.745, -38.516],
    
    // Interior do Ceará
    "Estádio Romeirão": [-6.439, -39.304],
    "Estádio Domingão": [-12.954, -38.392],
    
    // São Paulo
    "Estádio Moisés Lucarelli": [-22.912, -47.050], // Ponte Preta
    "Estádio Brinco de Ouro": [-22.857, -47.058], // Guarani
    "Arena Barueri": [-23.515, -46.882],
    "Estádio Novelli Júnior": [-22.494, -47.017], // Ituano
    "Estádio Santa Cruz": [-21.785, -48.187], // Botafogo-SP
    
    // Pernambuco
    "Ilha do Retiro": [-8.063, -34.871], // Sport
    "Arena Pernambuco": [-8.123, -35.313], // Retrô
    "Estádio dos Aflitos": [-8.057, -34.893], // Náutico
    
    // Bahia
    "Arena Fonte Nova": [-12.978, -38.504], // Bahia
    "Estádio de Pituaçu": [-12.959, -38.404],
    
    // Minas Gerais
    "Estádio Independência": [-19.912, -43.918], // América, Atlético
    "Mineirão": [-19.866, -43.972],
    "Estádio Parque do Sabiá": [-18.910, -48.258], // Uberlândia
    
    // Rio de Janeiro
    "Maracanã": [-22.912, -43.230],
    "Estádio São Januário": [-22.890, -43.225],
    "Estádio Nilton Santos": [-22.893, -43.292],
    
    // Rio Grande do Sul
    "Estádio Beira-Rio": [-30.065, -51.236],
    "Arena do Grêmio": [-29.974, -51.178],
    
    // Paraná
    "Arena da Baixada": [-25.448, -49.277],
    "Estádio Couto Pereira": [-25.422, -49.269],
    
    // Santa Catarina
    "Estádio Heriberto Hülse": [-28.716, -49.424], // Criciúma
    "Estádio Orlando Scarpelli": [-27.585, -48.566], // Figueirense
    "Ressacada": [-27.665, -48.536], // Avaí
    
    // Goiás
    "Estádio Serra Dourada": [-16.698, -49.236],
    "Estádio Hailé Pinheiro": [-16.680, -49.265],
    
    // Mato Grosso
    "Arena Pantanal": [-15.606, -56.116],
    
    // Amazonas
    "Arena da Amazônia": [-3.083, -60.028],
    
    // Pará
    "Estádio Mangueirão": [-1.375, -48.451],
    
    // Maranhão
    "Estádio Castelão": [-2.528, -44.255],
    
    // Piauí
    "Estádio Albertão": [-5.091, -42.802],
    
    // Rio Grande do Norte
    "Arena das Dunas": [-5.827, -35.215],
    
    // Paraíba
    "Estádio Almeidão": [-7.128, -34.882],
    
    // Alagoas
    "Estádio Rei Pelé": [-9.665, -35.736],
    
    // Sergipe
    "Estádio Batistão": [-10.921, -37.052],
    
    // Espírito Santo
    "Estádio Kléber Andrade": [-20.308, -40.298],
    
    // Distrito Federal
    "Estádio Mané Garrincha": [-15.784, -47.899],
    
    // Pode adicionar mais conforme necessidade
};

// Se estiver usando módulos (opcional, mas não necessário para este projeto)
// export default estadios;
