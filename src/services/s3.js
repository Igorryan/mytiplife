import AWS from 'aws-sdk'

//Bucket Configurations
const bucketName = 'playtubegiftcards'
const bucketRegion = 'us-east-1'
const IdentityPoolId = 'us-east-1:da161c60-7e52-49d8-b4ef-515d92d6df05'

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName }
})

export async function uploadFileToS3(file, filePath) {
  await s3
    .upload(
      {
        Key: filePath,
        Body: file,
        ACL: 'public-read',
        CacheControl: 'no-cache'
      },
      function (err, data) {
        if (err) {
          console.log('Erro ao tentar enviar arquivo para Bucket da S3:')
          console.log(err)
          return
        }

        console.log(data)
      }
    )
    .promise()

  return filePath
}
