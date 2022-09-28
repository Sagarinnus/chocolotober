import random
import numpy as np
from datetime import datetime
random.seed(datetime.now())

with open('E:\Documentos\P5\Chocolotober\originalSteps.dat','r') as f:
    lines = [line for line in f]

selected = np.zeros(30)
chocolotober = []
for i in range(5):
    y = 0
    artistaSeleccionado = [0,0,0,0,0,0]
    while y < 6:
        artista = random.randrange(0,6,1)
        cancion = random.randrange(0,5,1) + artista*5
        if (selected[cancion] < 1 and artistaSeleccionado[artista] < 1):
            artistaSeleccionado[artista] = 1
            selected[cancion] = 1
            chocolotober.append(lines[cancion])
            y += 1

print(chocolotober)        
with open('E:\Documentos\P5\Chocolotober\steps.dat','w') as target:
    for line in chocolotober:
        target.write( line )
