import fs from 'fs'
import os from 'os'
import path from 'path'

export async function upload(ctx) {
  await ctx.render('upload', {
  })
} 

export async function uploadApi(ctx) {
    // ignore non-POSTs
    if ('POST' != ctx.method) return await next();
    
    const file = ctx.request.body.files.files;
    const filenames = file.name.split('.')
    const filename = Math.random().toString() + '.' + filenames[filenames.length - 1]
    const reader = fs.createReadStream(file.path)
    const stream = fs.createWriteStream(path.join("src/static/img", filename))
    reader.pipe(stream);
    console.log('uploading %s -> %s', file.name, stream.path);

    ctx.body = filename
}