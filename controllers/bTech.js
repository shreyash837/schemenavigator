import readjsonSync from '../utils/fileJson.js';
import path from 'path'


let s1 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '1.json'));
let s2 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '2.json'));
let s3 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '3.json'));
let s4 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '4.json'));
let s5 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '5.json'));
let s6 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '6.json'));
let s7 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '7.json'));
let s8 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '8.json'));
let s9 = readjsonSync(path.join(process.cwd(), 'data', 'bTech', '9.json'));

export async function getS1(req, res) {
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

export async function getS2(req, res) {
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

export async function getS3(req, res) {
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

export async function getS4(req, res) {
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

export async function getS5(req, res) {
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

export async function getS6(req, res) {
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

export async function getS7(req, res) {
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

export async function getS8(req, res) {
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

export async function getS9(req, res) {
    if (!s9) {
        return res.status(404).json({
            success: false,
            msg: 'data not found'
        });
    }

    res.status(200).json({
        success: true,
        scheme: s9
    });
}

