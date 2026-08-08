import readjsonSync from '../utils/fileJson.js';
import path from 'path'

let s1 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '10.json'));
let s2 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '11.json'));
let s3 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '12.json'));
let s4 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '13.json'));
let s5 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '14.json'));
let s6 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '15.json'));
let s7 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '16.json'));
let s8 = readjsonSync(path.join(process.cwd(), 'data', 'mba', '17.json'));

export async function getS1Mba(req, res) {
    if (!s1) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }
  
    
    res.status(200).json({
        success: true,
        scheme: s1
    });
}

export async function getS2Mba(req, res) {
    if (!s2) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s2
    });
}

export async function getS3Mba(req, res) {
    if (!s3) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s3
    });
}

export async function getS4Mba(req, res) {
    if (!s4) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s4
    });
}

export async function getS5Mba(req, res) {
    if (!s5) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s5
    });
}

export async function getS6Mba(req, res) {
    if (!s6) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s6
    });
}

export async function getS7Mba(req, res) {
    if (!s7) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s7
    });
}

export async function getS8Mba(req, res) {
    if (!s8) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s8
    });
}
