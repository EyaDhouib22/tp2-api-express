const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.json("Registre de personnes! Utilisez les bonnes routes.");
});

// 🟢 Récupérer toutes les personnes
app.get('/personnes', (req, res) => {
    db.all("SELECT * FROM personnes", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "data": rows });
    });
});

// 🟢 Récupérer une personne par ID
app.get('/personnes/:id', (req, res) => {
    const id = req.params.id;
    db.get("SELECT * FROM personnes WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "data": row });
    });
});

// 🟢 Ajouter une nouvelle personne (avec adresse)
app.post('/personnes', (req, res) => {
    const { nom, adresse } = req.body;
    
    if (!nom || !adresse) {
        res.status(400).json({ "error": "Veuillez fournir un nom et une adresse" });
        return;
    }

    db.run(`INSERT INTO personnes (nom, adresse) VALUES (?, ?)`, [nom, adresse], function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ 
            "message": "success",
            "data": { id: this.lastID, nom, adresse }
        });
    });
});

// 🟢 Mettre à jour une personne (nom et adresse)
app.put('/personnes/:id', (req, res) => {
    const id = req.params.id;
    const { nom, adresse } = req.body;

    if (!nom || !adresse) {
        res.status(400).json({ "error": "Veuillez fournir un nom et une adresse" });
        return;
    }

    db.run(`UPDATE personnes SET nom = ?, adresse = ? WHERE id = ?`, [nom, adresse, id], function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success" });
    });
});

// 🟢 Supprimer une personne
app.delete('/personnes/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM personnes WHERE id = ?`, id, function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success" });
    });
});

// 🟢 Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
