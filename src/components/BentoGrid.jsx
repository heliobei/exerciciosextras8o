export default function BentoGrid() {
    return (
      <div className="min-h-screen pt-24 flex justify-center">
        <div className="w-full max-w-5xl grid gap-6 p-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 1</h2>
              <p className="mt-2 text-sm">Texto descritivo sobre este item da grade.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 2</h2>
              <p className="mt-2 text-sm">Outra explicação envolvente para este bloco.</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 3</h2>
              <p className="mt-2 text-sm">Detalhes interessantes sobre este espaço.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 4</h2>
              <p className="mt-2 text-sm">Descrição para atrair a atenção do leitor.</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 5</h2>
              <p className="mt-2 text-sm">Um parágrafo cativante sobre este bloco.</p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 6</h2>
              <p className="mt-2 text-sm">Explicação breve e impactante.</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 7</h2>
              <p className="mt-2 text-sm">Texto que instiga a curiosidade.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 8</h2>
              <p className="mt-2 text-sm">Mais detalhes sobre este conteúdo.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 9</h2>
              <p className="mt-2 text-sm">Informações adicionais aqui.</p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 10</h2>
              <p className="mt-2 text-sm">Resumo instigante deste elemento.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 11</h2>
              <p className="mt-2 text-sm">Uma breve introdução ao conceito.</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 12</h2>
              <p className="mt-2 text-sm">Explicação sobre a importância deste item.</p>
            </div>
          </div>
          {/* Row 5 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 13</h2>
              <p className="mt-2 text-sm">Resumo essencial deste conteúdo.</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold">Título 14</h2>
              <p className="mt-2 text-sm">Finalizando com um conceito interessante.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  