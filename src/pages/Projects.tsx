import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: 'Приют "Теплый дом"',
      description: "Строительство нового приюта для бездомных собак и кошек",
      progress: 75,
      raised: 450000,
      goal: 600000,
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    },
    {
      title: "Мобильная ветклиника",
      description: "Передвижная ветеринарная помощь в отдаленных районах",
      progress: 45,
      raised: 180000,
      goal: 400000,
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop",
    },
    {
      title: "Программа стерилизации",
      description: "Бесплатная стерилизация для контроля популяции",
      progress: 90,
      raised: 270000,
      goal: 300000,
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наши проекты
          </h1>
          <p className="text-xl text-gray-600">
            Активные инициативы по защите животных
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Собрано</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{project.raised.toLocaleString()} ₽</span>
                    <span>{project.goal.toLocaleString()} ₽</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Поддержать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
