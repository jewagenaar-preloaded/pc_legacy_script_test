uniform float uTime;
uniform float uDist;

uniform vec3 uStartPos;
uniform vec3 uStartVec;
uniform vec3 uEndVec;

attribute vec3 aPosition;
attribute vec3 aNormal;

varying vec4 vNormal;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

mat3 gen_basis(vec3 fwd)
{
    vec3 up  = vec3(0.0, 0.0, 1.0);
    vec3 lft = cross(fwd, up);
    mat3 m   = mat3(lft, fwd, up);
    
    return m;
}

void main(void)
{    
    vec3 pos = gen_basis(uEndVec) * aPosition;        
    float d = pos.y + uDist;    

    if(d > 0.0)
    {
        float t = (8.0 + pos.y) / 16.0;
        //pos = pos + uStartPos + normalize(mix(uStartVec, uEndVec, t)) * d;
        pos = pos * gen_basis(normalize(mix(uStartVec, uEndVec, t)));        
    }        
    
    vNormal = vec4(gen_basis(uEndVec) * aNormal, 1.0);
    
    gl_Position = matrix_viewProjection * matrix_model * vec4(pos, 1.0);
}